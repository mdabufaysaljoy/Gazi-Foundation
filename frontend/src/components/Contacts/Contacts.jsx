import React, { useState } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      designation: "Manager",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Developer",
      email: "jane@example.com",
      phone: "098-765-4321",
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
  });

  const handleAddContact = () => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
    setIsAdding(false);
    setNewContact({ name: "", designation: "", email: "", phone: "" });
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const SvgLogo = ({ type }) => {
    switch (type) {
      case "name":
        return (
          <svg
            className="w-5 h-5 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 0a5 5 0 00-5 5c0 1.1.4 2.1 1 2.8C4.3 8 3 9.9 3 12v3h14v-3c0-2.1-1.3-4-3-4.2A4.978 4.978 0 0015 5a5 5 0 00-5-5z" />
          </svg>
        );
      case "designation":
        return (
          <svg
            className="w-5 h-5 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 0a10 10 0 00-10 10c0 5.5 10 10 10 10s10-4.5 10-10A10 10 0 0010 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" />
          </svg>
        );
      case "email":
        return (
          <svg
            className="w-5 h-5 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 4a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm1 1v10h14V5H3z" />
            <path d="M3 5l7 4 7-4v1l-7 4-7-4V5z" />
          </svg>
        );
      case "phone":
        return (
          <svg
            className="w-5 h-5 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">Contacts</h1>
          <p className="text-gray-600 mt-2">যেকোনো সমস্যায় এবং গাজী ফাউন্ডেশনের নতুন সদস্য হতে যোগাযোগ করুন</p>
        </div>

        {/* Contacts List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            যোগাযোগের নাম্বার ‍সমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col"
              >
                <div className="flex items-center mb-2">
                  <SvgLogo type="name" />
                  <span className="ml-2 text-xl font-medium text-gray-800">
                    {contact.name}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <SvgLogo type="designation" />
                  <span className="ml-2 text-gray-600">
                    {contact.designation}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <SvgLogo type="phone" />
                  <span className="ml-2 text-gray-600">{contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <SvgLogo type="email" />
                  <span className="ml-2 text-gray-600">{contact.email}</span>
                </div>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  className="text-red-600 hover:underline mt-4"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Contact */}
        {isAdding ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Add New Contact
            </h2>

            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                নাম
              </label>
              <input
                type="text"
                id="name"
                value={newContact.name}
                onChange={(e) =>
                  setNewContact({ ...newContact, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Designation Field */}
            <div className="mb-4">
              <label
                htmlFor="designation"
                className="block text-gray-700 font-medium mb-2"
              >
                পদবী
              </label>
              <input
                type="text"
                id="designation"
                value={newContact.designation}
                onChange={(e) =>
                  setNewContact({ ...newContact, designation: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                ইমেইল
              </label>
              <input
                type="email"
                id="email"
                value={newContact.email}
                onChange={(e) =>
                  setNewContact({ ...newContact, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                ফোন
              </label>
              <input
                type="text"
                id="phone"
                value={newContact.phone}
                onChange={(e) =>
                  setNewContact({ ...newContact, phone: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Save and Cancel Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsAdding(false)}
                className="bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-500 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddContact}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsAdding(true)}
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Add Contact
          </button>
        )}
      </div>
    </div>
  );
};

export default Contacts;
