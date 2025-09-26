import { cards as initialCards } from "../cardsData";

function Kits() {
  return (
    <div className="bg-gray-600 font-bold min-h-screen">
      <h1 className="text-center text-4xl p-4 font-serif">Kits</h1>
      <div id="boxes" className="flex flex-row gap-4 grid grid-cols-4 pl-4 pr-4">
        {initialCards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-100 border-3 rounded-xl flex flex-col text-xl"
          >
            <img src={card.image} className="w-[95%] mx-auto pt-2" />
            <h2 className="text-center mt-auto p-4">{card.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kits;
