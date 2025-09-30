import { cards as initialCards } from "../cardsData";
import { useState } from "react";

function Kits() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredCards = initialCards.filter((card) =>
    card.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-gray-600 font-bold min-h-screen">
      <h1 className="text-center text-4xl p-4 font-serif pb-8">Kits</h1>

      <form>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className="block mx-auto w-1/4 border-3 bg-gray-300 rounded-l p-2"
        />
      </form>

      <div id="boxes" className="grid grid-cols-4 gap-4 pl-4 pr-4 pt-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-400 border-3 rounded flex flex-col text-xl hover:bg-gray-700 hover:text-green-700"
          >
            <img
              src={card.image}
              className="w-[95%] mx-auto pt-2"
              alt={card.name}
            />
            <h2 className="text-center mt-auto pb-4 pt-4">{card.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kits;
