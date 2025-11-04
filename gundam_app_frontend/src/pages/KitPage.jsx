import { useParams } from "react-router-dom";
import { cards } from "../cardsData";

export default function KitPage() {
  const { kitId } = useParams();
  const kit = cards.find((k) => k.id === kitId);

  if (!kit) return <div className="p-4">Kit not found.</div>;

    return (
      <div className="font-bold flex p-4">
        <div className="w-1/2 mx-auto">
          <h1 className="text-3xl font-bold">{kit.name}</h1>
          <p className="text-gray-900 mb-4">
            {kit.grade} | {kit.series}
          </p>
          <img
            src={kit.image}
            alt={kit.name}
            className="h-[50vh] w-auto object-contain"
          />
        </div>

        <div className="w-1/2 border border-3 rounded-lg h-[80vh] flex">
          <h1 className="block mx-auto text-2xl p-4">Rating:</h1>
          <h1 className="block mx-auto text-2xl p-4">Instructions:</h1>
        </div>
      </div>
    );
}
