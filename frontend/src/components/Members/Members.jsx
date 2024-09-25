import React, { useEffect, useState } from "react";

import AddNewMember from "./AddNewMember";
import MemberList from "./MemberList";
const formInitialState = {
  name: "",
  email: "",
  role: "Member",
  status: "Active",
  joined: "",
};

const Members = () => {
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState(formInitialState);

  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  function getMembers() {
    fetch("http://localhost:3125/members")
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error(error));
  }

  const handleAddChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      id: members.length + 1,
      [id]: value,
      joined: new Date().toLocaleDateString("bn-BD"),
    }));
  };

  // Handle opening the edit modal
  const handleEditClick = (member) => {
    setIsEditing(true);
    setCurrentMember(member);
  };

  // Handle input changes in the edit modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentMember({ ...currentMember, [name]: value });
  };

  // Handle saving the edited member details
  const handleSaveClick = () => {
    fetch(`http://localhost:3125/members/${currentMember._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentMember),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error editing member");
        }
        getMembers();
      })
      .catch((error) => console.error(error));
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === currentMember.id ? currentMember : member
      )
    );
    setIsEditing(false);
    setCurrentMember(null);
  };

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:3125/members/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Error deleting member");
      }
      getMembers();
    });
  };

  const handleAddMember = (event) => {
    event.preventDefault();
    setMembers([...members, formData]);
    fetch(`http://localhost:3125/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        getMembers();
        if (!res.ok) {
          throw new Error("Error adding member");
        }
      })
      .catch((err) => console.log(err));
    setFormData(formInitialState);
  };

  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    getMembers();
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthorized(true);
    }
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">সদস্যগণ</h1>
          <p className="text-gray-600 mt-2">
            আপনার প্ল্যাটফর্মের সমস্ত সদস্য দেখুন এবং পরিচালনা করুন৷
          </p>
        </div>
        <MemberList
          currentMember={currentMember}
          members={members}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          handleInputChange={handleInputChange}
          isEditing={isEditing}
          handleSaveClick={handleSaveClick}
          setIsEditing={setIsEditing}
        />
        {isAuthorized && (
          <AddNewMember
            handleAddChange={handleAddChange}
            handleAddMember={handleAddMember}
            formData={formData}
          />
        )}
      </div>
    </div>
  );
};

export default Members;
