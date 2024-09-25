import React from "react";

const AddNewMember = ({
  handleAddChange,
  handleAddMember,
  formData: { name, email, role, status },
}) => {
  return (
    <>
      {/* Add New Member Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Member
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleAddMember}>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter member name"
                value={name}
                onChange={handleAddChange}
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleAddChange}
                value={role}
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter member email"
                value={email}
                onChange={handleAddChange}
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleAddChange}
                value={status}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Add Member
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewMember;
