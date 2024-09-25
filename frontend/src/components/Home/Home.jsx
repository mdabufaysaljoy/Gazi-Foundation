import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">গাজী ফাউন্ডেশনে</span> আপনাকে
            স্বাগতম
          </h1>
          <p className="text-sm md:text-lg mb-8">
            বিরামহীন সঞ্চয়, সদস্য ব্যবস্থাপনা, অর্থপ্রদানের বিকল্প এবং আরও অনেক
            কিছুর অভিজ্ঞতা নিন।
          </p>
          <Link to="/contacts">
            <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white hover:border transition active:scale-110 duration-300">
              সদস্য হোন
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">পরিষেবা সমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-3">জমার বিবরণ</h3>
              <p className="text-gray-700">
                বিস্তারিত অন্তর্দৃষ্টি এবং বিশ্লেষণ সহ অনায়াসে আপনার সঞ্চয়
                পরিচালনা করুন.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-3">সদস্যগণ</h3>
              <p className="text-gray-700">
                নির্বিঘ্ন সদস্য ব্যবস্থাপনা, ক্লাব, দল, বা জন্য কিনা সংগঠন
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-3">পেমেন্ট অপশন</h3>
              <p className="text-gray-700">
                প্রতিটি গ্রাহকের প্রয়োজন মেটাতে একাধিক অর্থপ্রদানের বিকল্প।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            আমাদের সাথে আজই যুক্ত হোন
          </h2>
          <p className="text-gray-700 mb-8">
            আপনার ক্রিয়াকলাপগুলিকে সহজ করার জন্য আমাদের ব্যাপক ব্যবস্থাপনা
            সমাধানগুলির সুবিধা নিন।
          </p>
          <Link to="/contacts">
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 hover:text-blue-600 hover:border border-blue-600 active:scale-110 transition duration-300">
              যোগাযোগ করুন
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
