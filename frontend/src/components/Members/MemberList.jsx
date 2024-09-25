import React from "react";

const MemberList = ({
  members,
  handleEditClick,
  handleDeleteClick,
  handleInputChange,
  isEditing,
  currentMember,
  handleSaveClick,
  setIsEditing
}) => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthorized(true);
    }
  }, []);
  return (
    <>
      {/* Members List */}
      <div className="overflow-auto h-60">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-600 text-white sticky top-0">
            <tr>
              <th className="py-3 px-4 text-left">আইডি</th>
              <th className="py-3 px-4 text-left">নাম</th>
              <th className="py-3 px-4 text-left">পদ</th>
              <th className="py-3 px-4 text-left">ইমেইল</th>
              <th className="py-3 px-4 text-left">যুক্ত হয়েছেন</th>
              <th className="py-3 px-4 text-left">অবস্থা</th>
              {isAuthorized && <th className="py-3 px-4 text-left">অ্যাকশন</th>}
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 px-4">{member.id}</td>
                <td className="py-3 px-4">{member.name}</td>
                <td className="py-3 px-4">{member.role}</td>
                <td className="py-3 px-4">{member.email}</td>
                <td className="py-3 px-4">{member.joined}</td>
                <td
                  className={`py-3 px-4 ${
                    member.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {member.status}
                </td>
                {isAuthorized && (
                  <td className="py-3 px-4 flex space-x-4">
                    {/* Edit Button */}
                    <button
                      onClick={() => handleEditClick(member)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteClick(member._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isEditing && currentMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Member</h2>

            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={currentMember.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Role Field */}
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-gray-700 font-medium mb-2"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                value={currentMember.role}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Member">Member</option>
                <option value="Admin">Admin</option>
                <option value="Moderator">Moderator</option>
              </select>
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={currentMember.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Status Field */}
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 font-medium mb-2"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={currentMember.status}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Save and Cancel Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-500 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveClick}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MemberList;
