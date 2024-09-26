import React, { useEffect, useState } from "react";
import EditSavings from "./EditSavings";

const SavingDetails = () => {
  // State to manage edit form visibility
  const [isEditing, setIsEditing] = useState(false);
  const [totalSavings, setTotalSavings] = useState(12000);
  const [monthlyContributions, setMonthlyContributions] = useState(1200);
  const [yearEndProjection, setYearEndProjection] = useState(25000);

  const [tillDateNow, setTillDateNow] = useState("");
  const [estematedNextYear, setEstematedNextYear] = useState("");

  const [savingDetails, setSavingDetails] = useState({});

  function getSavingDetails() {
    fetch("https://gazi-foundation-backend.vercel.app/saving-details")
      .then((response) => response.json())
      .then((data) => {
        const SavingDetails = data[0];

        setSavingDetails(SavingDetails);

        setTotalSavings(SavingDetails.totalSavings);
        setMonthlyContributions(SavingDetails.monthlyContributions);
        setYearEndProjection(SavingDetails.yearEndProjection);

        setTillDateNow(SavingDetails.tillDateNow);
        setEstematedNextYear(SavingDetails.estematedNextYear);
      })
      .catch((error) => console.error(error));
  }

  // Toggle edit form
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save the changes
  const handleSave = () => {
    // Handle saving the changes
    const newSavingDetails = {
      totalSavings,
      monthlyContributions,
      yearEndProjection,
      tillDateNow,
      estematedNextYear,
    };
    fetch(
      `https://gazi-foundation-backend.vercel.app/saving-details/${savingDetails._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSavingDetails),
      }
    )
      .then(getSavingDetails())
      .catch((error) => console.error(error));
    setIsEditing(false);
  };

    const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    getSavingDetails();
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
          <h1 className="text-4xl font-bold text-blue-600">জমার বিবরণ</h1>
          <p className="text-gray-600 mt-2"></p>
        </div>

        {isAuthorized && (
          <EditSavings
            isEditing={isEditing}
            toggleEdit={toggleEdit}
            estematedNextYear={estematedNextYear}
            setEstematedNextYear={setEstematedNextYear}
            monthlyContributions={monthlyContributions}
            setMonthlyContributions={setMonthlyContributions}
            setTotalSavings={setTotalSavings}
            setTillDateNow={setTillDateNow}
            setYearEndProjection={setYearEndProjection}
            totalSavings={totalSavings}
            tillDateNow={tillDateNow}
            yearEndProjection={yearEndProjection}
            handleSave={handleSave}
          />
        )}

        {/* Savings Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <h2 className="text-xl font-semibold text-gray-800">মোট জমা</h2>
            <p className="text-3xl font-bold text-blue-600 mt-3">
              ৳{totalSavings}
            </p>
            <p className="text-gray-500 mt-1">{tillDateNow} পর্যন্ত </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <h2 className="text-xl font-semibold text-gray-800">মাসিক জমা</h2>
            <p className="text-3xl font-bold text-green-600 mt-3">
              ৳{monthlyContributions}
            </p>
            <p className="text-gray-500 mt-1">মাসিক গড়</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              বছর শেষে জমা
            </h2>
            <p className="text-3xl font-bold text-purple-600 mt-3">
              ৳{yearEndProjection}
            </p>
            <p className="text-gray-500 mt-1">
              {" "}
              আনুমানিক {estematedNextYear} এ
            </p>
          </div>
        </div>

        {/* Future Projection Section */}
        {/* <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Future Savings Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800">
                Vacation Fund
              </h3>
              <p className="text-lg text-gray-600 mt-2">Goal: $5,000</p>
              <p className="text-lg text-blue-600 mt-2">
                Progress: ${vacationFund}
              </p>
              <div className="relative pt-3">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${(vacationFund / 5000) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800">
                Emergency Fund
              </h3>
              <p className="text-lg text-gray-600 mt-2">Goal: $10,000</p>
              <p className="text-lg text-green-600 mt-2">
                Progress: ${emergencyFund}
              </p>
              <div className="relative pt-3">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${(emergencyFund / 10000) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SavingDetails;
