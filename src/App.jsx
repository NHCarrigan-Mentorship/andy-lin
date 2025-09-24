import { useState } from "react";
import "./index.css";
import { cards as initialCards } from "./cardsData";

function App() {
  return (
    <>
      <div id="NavBar" className="bg-gray-500 flex font-bold text-2xl p-2 pl-4">
        <img src="/logo.png" className="h-10" />
        <h1 className="my-auto">Gunpla Collection</h1>
        <div className="flex gap-6 ml-auto p-2 pr-4">
          <button className="hover:text-blue-900">Kits</button>
          <button className="hover:text-blue-900">Collection</button>
          <button className="hover:text-blue-900">Login</button>
        </div>
      </div>

      <div className="bg-gray-700 pr-4 pl-4 font-bold text-xl p-4">
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
    </>
  );
}

export default App;
