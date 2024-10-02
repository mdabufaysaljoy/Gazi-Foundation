import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

    const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 //   fetch("https://gazi-foundation-backend.vercel.app/admin-login", {
   //   method: "POST",
      // headers: {
        // "Content-Type": "application/json",
      // },
      // body: JSON.stringify({ username, password }),
      // credentials: "include", // If you are sending cookies
    // })
      // .then((res) => {
        // if (!res.ok) {
          // setError("Invalid username or password");
          // throw new Error("Error logging in");
        // }
        // return res.json();
      // })
      // .then((data) => {
        // localStorage.setItem("token", data.token);
        // navigate("/");
      // })
      // .catch((error) => console.log(error));
    if(username==="admin@gazifoundation.org" && password==="admin@gazi"){
        localStorage.setItem("token", "json-web-token-added-successfully");
      alert("login successfull");
      navigate("/");
    }else{
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Admin Login
        </h2>
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
