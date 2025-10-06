import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", form);
  };

  return (
    <div className="font-bold">
      <h1 className="text-center text-4xl p-4 font-serif">Sign Up</h1>
      <div id="login_block" className="flex justify-center mt-10">
        <form
          onSubmit={handleSubmit}
          className="p-4 flex flex-col gap-2 max-w-sm font-sans"
        >
          <label className="text-2xl" htmlFor="email">
            Enter your email:
          </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border rounded-lg p-2 bg-gray-300 w-96 mb-3"
          />
          <label className="text-2xl" htmlFor="username">
            Create your username:
          </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="border rounded-lg p-2 bg-gray-300 w-96 mb-3"
          />

          <label className="text-2xl" htmlFor="password">
            Create your password:
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="border rounded-lg p-2 bg-gray-300 w-96 mb-3"
          />

          <button
            type="submit"
            className="bg-blue-700 border text-white rounded-xl p-2 hover:bg-blue-900 w-96"
          >
            Sign Up
          </button>
          <h1>Already have an account?</h1>
          <Link
            to="/login"
            className="bg-gray-700 border text-white rounded-xl p-2 hover:bg-gray-900 text-center w-96"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
