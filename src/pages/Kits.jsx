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

  const [showFilter, setShowFilter] = useState(false)

  return (
    <div className="bg-gray-600 font-bold min-h-screen">
      <h1 className="text-center text-4xl p-4 font-serif pb-8">Kits</h1>

      <form>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className="block mx-auto w-1/4 border-3 bg-gray-300 rounded-xl p-2"
        />
      </form>

      <div id="content" className="flex pt-6">
        <div className="pl-4 w-1/3">
          <button
            className="text-xl bg-gray-500 border-3 rounded-xl p-2 hover:bg-gray-200"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter Options:
          </button>
          {showFilter && (
            <div id="filterBar">
              <label for="filter">Filter by grade:</label>
              <select
                id="filter"
                name="filter"
                className="p-2 border rounded bg-gray-500"
              >
                <option value="hg">High Grade</option>
                <option value="rg">RG</option>
                <option value="mg">MG</option>
                <option value="mg">PG</option>
                <option value="mg">SD</option>
                <option value="mg">Full Mechanics</option>
              </select>
              <label for="filter">Filter by series:</label>
              <select
                id="filter"
                name="filter"
                className="p-2 border rounded bg-gray-500"
              >
                <option value="hg">UC</option>
                <option value="rg">Seed</option>
                <option value="mg">00</option>
                <option value="mg">IBO</option>
                <option value="mg">WFM</option>
                <option value="mg">GQuuuuuux</option>
              </select>
            </div>
          )}
        </div>

        <div id="boxes" className="grid grid-cols-4 gap-4 pl-4 pr-4">
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
    </div>
  );
}

export default Kits;
