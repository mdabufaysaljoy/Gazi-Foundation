import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Site Map</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/saving-details" className="hover:underline">
                  Saving Details
                </a>
              </li>
              <li>
                <a href="/members" className="hover:underline">
                  Members
                </a>
              </li>
              <li>
                <a href="/payment-options" className="hover:underline">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="/contacts" className="hover:underline">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Gazi Foundation. All rights
            reserved. Created By <a href="https://www.facebook.com/13FH14" className="hover:underline text-blue-500" target="_blank">Faysal Joy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
