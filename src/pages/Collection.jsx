import { useState } from "react";

function Collection() {
  const [completed, setCompleted] = useState([
    "HG Strike Freedom",
    "SD Gundam Nobunaga",
    "HG Infinite Justice",
    "HG Barbatos Lupus",
    "HG Ryusei-Go Graze",
    "SD Freedom Gundam",
    "Frame Arms Girls Jinghu",
    "RG Gundam Mk-II Titans",
    "HG Gundam Ez-8",
    "SD Gundam Aerial",
    "30 Minute Sisters Lirinel Color A",
    "HG Gundam Aerial",
    "Haro Basic Green",
    "HG Darilbalde",
    "HG ChuChu's Demi Trainer",
    "SD Unicorn Gundam",
  ]);

  const [backlog, setBacklog] = useState([
    "HG Gundam Ground Type",
    "HG Guel's Dilanza",
    "MG Barbatos",
    "HG Gundam Lfrith",
    "HG Gundam Aerial Neon",
    "HG Gundam Ball Twin Set",
    "PG Unleashed RX-78-2 Gundam",
    "HG Gundam Flauros Ryusei-Go",
    "HG Gundam Schwarzette",
    "HG Gundam Calibarn",
    "SD Nu Gundam",
    "SD Astray Red Frame",
  ]);

  const [wishlist, setWishlist] = useState([
    "HG Michaelis",
    "Full Mechanics Gundam Aerial",
    "RG RX-78-2 2.0",
    "RG Nu Gundam",
    "RG Hi-Nu Gundam",
    "MG RX-78-2 2.0",
    "MGEX Unicorn Gundam",
    "MGEX Strike Freedom Gundam",
    "PG Unleashed Nu Gundam",
  ]);

  const [showCompleted, setShowCompleted] = useState(true);
  const [showBacklog, setShowBacklog] = useState(true);
  const [showWishlist, setShowWishlist] = useState(true);

  return (
    <div className="bg-gray-600 font-bold min-h-screen gap-2">
      <h1 className="text-center text-4xl p-4 font-serif">Collection</h1>

      <div id="completed" className="pb-4">
        <h1
          className="pl-4 text-3xl underline bg-blue-700 font-serif"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          Completed
        </h1>
        {showCompleted && (
          <div id="completedList" className="pl-8 bg-blue-800">
            <ul className="list-disc pl-8 text-2xl space-y-2">
              {completed.map((item, index) => (
                <li key={index} className="hover:bg-blue-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div id="backlog" className="pb-4">
        <h1
          className="pl-4 text-3xl underline bg-yellow-700 font-serif"
          onClick={() => setShowBacklog(!showBacklog)}
        >
          Backlog
        </h1>
        {showBacklog && (
          <div id="backlogList" className="pl-8 bg-yellow-800">
            <ul className="list-disc pl-8 text-2xl space-y-2">
              {backlog.map((item, index) => (
                <li key={index} className="hover:bg-yellow-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div id="wishlist" className="pb-4">
        <h1
          className="pl-4 text-3xl underline bg-red-700 font-serif"
          onClick={() => setShowWishlist(!showWishlist)}
        >
          Wishlist
        </h1>
        {showWishlist && (
          <div id="wishlistList" className="pl-8 bg-red-800">
            <ul className="list-disc pl-8 text-2xl space-y-2">
              {wishlist.map((item, index) => (
                <li key={index} className="hover:bg-red-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collection;
