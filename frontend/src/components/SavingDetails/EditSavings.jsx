import React from "react";

const EditSavings = ({
  toggleEdit,
  isEditing,
  totalSavings,
  setTotalSavings,
  monthlyContributions,
  setMonthlyContributions,
  yearEndProjection,
  setYearEndProjection,
  tillDateNow,
  setTillDateNow,
  estematedNextYear,
  setEstematedNextYear,
  handleSave,
}) => {
  return (
    <>
      {/* Toggle Edit Button */}
      <div className="text-right mb-6">
        <button
          onClick={toggleEdit}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      {/* Edit Section (Visible when isEditing is true) */}
      {isEditing && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Edit Savings Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Edit Total Savings */}
            <div>
              <label className="block text-gray-700">Total Savings</label>
              <input
                type="number"
                value={totalSavings}
                onChange={(e) => setTotalSavings(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Edit Monthly Contributions */}
            <div>
              <label className="block text-gray-700">
                Monthly Contributions
              </label>
              <input
                type="number"
                value={monthlyContributions}
                onChange={(e) => setMonthlyContributions(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            {/* Edit Year-End Projection */}
            <div>
              <label className="block text-gray-700">Year-End Projection</label>
              <input
                type="number"
                value={yearEndProjection}
                onChange={(e) => setYearEndProjection(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>

          {/* Edit Savings Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-gray-700">Till Date Now</label>
              <input
                type="date"
                value={tillDateNow}
                onChange={(e) => setTillDateNow(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700">Estemated Next Year</label>
              <input
                type="date"
                value={estematedNextYear}
                onChange={(e) => setEstematedNextYear(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="text-right mt-6">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditSavings;
