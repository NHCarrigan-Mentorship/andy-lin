import { cards as initialCards } from "../cardsData";
import { useState } from "react";
import { Link } from "react-router-dom";

function Kits() {
  const [query, setQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState([]);

  const handleChange = (e) => setQuery(e.target.value);

  const toggleGrade = (grade) => {
    setSelectedGrades((prev) =>
      prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade]
    );
  };

  const toggleSeries = (series) => {
    setSelectedSeries((prev) =>
      prev.includes(series)
        ? prev.filter((s) => s !== series)
        : [...prev, series]
    );
  };

  const filteredCards = initialCards.filter((card) => {
    const matchesQuery = card.name.toLowerCase().includes(query.toLowerCase());
    const matchesGrade =
      selectedGrades.length === 0 || selectedGrades.includes(card.grade);
    const matchesSeries =
      selectedSeries.length === 0 || selectedSeries.includes(card.series);
    return matchesQuery && matchesGrade && matchesSeries;
  });

  return (
    <div className="font-bold">
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
        <div className="pl-4 w-1/7">
          <button
            type="button"
            className="text-xl bg-gray-400 border-3 rounded-xl p-2 hover:bg-gray-200"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter Options:
          </button>

          {showFilter && (
            <div id="filterBar" className="mt-4 p-4 rounded-xl space-y-4">
              <div className="border-3 rounded-xl p-2 bg-gray-400">
                <h2 className="text-lg">Grade:</h2>
                {[
                  "HG",
                  "RG",
                  "MG",
                  "PG",
                  "SD",
                  "FM",
                  "RE",
                  "Mega",
                  "Other",
                ].map((grade) => (
                  <label key={grade} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={grade}
                      checked={selectedGrades.includes(grade)}
                      onChange={() => toggleGrade(grade)}
                    />
                    <span>{grade}</span>
                  </label>
                ))}
              </div>

              <div className="border-3 rounded-xl p-2 bg-gray-400">
                <h2 className="text-lg">Series:</h2>
                {[
                  "UC",
                  "Seed",
                  "00",
                  "IBO",
                  "WFM",
                  "GQuuuuuux",
                  "Wing",
                  "G Gundam",
                  "Build Divers",
                  "Other",
                ].map((series) => (
                  <label key={series} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={series}
                      checked={selectedSeries.includes(series)}
                      onChange={() => toggleSeries(series)}
                    />
                    <span>{series}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div id="boxes" className="grid grid-cols-4 gap-4 pl-4 pr-4 pt-2">
          {filteredCards.map((card) => (
            <Link to={`/kits/${card.id}`}>
              <div
                key={card.id}
                className="bg-gray-400 border-3 rounded-xl flex flex-col hover:bg-gray-800 text-xl transition duration-300  h-135 group"
              >
                <img
                  src={card.image}
                  className="w-[95%] mx-auto pt-2 transition duration-300 group-hover:brightness-50"
                  alt={card.name}
                />
                <h2 className="text-center mt-auto pb-4 pt-4">{card.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kits;
