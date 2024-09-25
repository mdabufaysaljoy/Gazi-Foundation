import React from "react";

const PaymentOptions = () => {
  const paymentMethods = [
    {
      id: 1,
      type: "bKash",
      provider: "bKash",
      number: "017********",
      additionalInfo: "(Send Money)",
    },
    {
      id: 2,
      type: "Nagad",
      provider: "Nagad",
      number: "018********",
      additionalInfo: "(Send Money)",
    },
    {
      id: 3,
      type: "Rocket",
      provider: "Rocket",
      number: "019********",
      additionalInfo: "(Send Money)",
    },
    {
      id: 4,
      type: "Bank Transfer",
      provider: "Bank Name",
      account: "1234-5678-9012",
      routingNo: "123456789",
      branch: "Dhaka Branch",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">Payment Options</h1>
          <p className="text-gray-600 mt-2">
            যেসকল মাধ্যমে আপনি পেমেন্ট করতে পারবেন
          </p>
        </div>

        {/* Payment Methods List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            পেমেন্টের মাধ্যম সমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-medium text-gray-800">
                    {method.type}{" "}
                    {method.additionalInfo && method.additionalInfo}
                  </h3>
                  {method.type !== "Bank Transfer" ? (
                    <p className="text-gray-600">
                      {method.provider} - {method.number}
                    </p>
                  ) : (
                    <div>
                      <p className="text-gray-600">
                        <strong>Provider:</strong> {method.provider}
                      </p>
                      <p className="text-gray-600">
                        <strong>Account No:</strong> {method.account}
                      </p>
                      <p className="text-gray-600">
                        <strong>Routing No:</strong> {method.routingNo}
                      </p>
                      <p className="text-gray-600">
                        <strong>Branch:</strong> {method.branch}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
