import { cards as initialCards } from "../cardsData";

function Kits() {
  return (
    <div className="bg-gray-600 font-bold min-h-screen">
      <h1 className="text-center text-4xl p-4 font-serif pb-8">Kits</h1>
      <div
        id="boxes"
        className="flex flex-row gap-2 grid grid-cols-4 pl-4 pr-4"
      >
        {initialCards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-100 border-3 rounded flex flex-col text-xl bg-gray-400 hover:bg-gray-700 hover:text-green-700"
          >
            <img src={card.image} className="w-[95%] mx-auto pt-2" />
            <h2 className="text-center mt-auto pb-4 pt-4">{card.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kits;
