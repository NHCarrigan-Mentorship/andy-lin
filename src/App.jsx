import { useState } from "react";
import "./index.css";
import { cards as initialCards } from "./cardsData";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Collection() {
  return <h1 className="text-center text-4xl p-4 font-bold">Collection</h1>;
}

function Login() {
  return <h1 className="text-center text-4xl p-4 font-bold">Login</h1>;
}

function Kits() {
  return (
    <div className="bg-gray-700 pr-4 pl-4 font-bold text-xl">
      <h1 className="text-center text-4xl p-4">Kits</h1>
      <div id="boxes" className="flex flex-row gap-4 grid grid-cols-4">
        {initialCards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img src={card.image} className="w-[90%] mx-auto pt-4" />
            <h2 className="text-center mt-auto p-4">{card.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div id="NavBar" className="bg-gray-500 flex font-bold text-2xl p-2 pl-4">
        <img src="/logo.png" className="h-10 my-auto" />
        <h1 className="my-auto text-4xl">Gunpla Collection</h1>
        <div className="flex gap-8 ml-auto p-2 pr-4">
          <Link
            to="/"
            className="hover:text-blue-900 px-3 py-1 text-4xl"
          >
            Kits
          </Link>
          <Link
            to="/collection"
            className="hover:text-blue-900 px-3 py-1 text-4xl"
          >
            Collection
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-900 px-3 py-1 text-4xl"
          >
            Login
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Kits />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
