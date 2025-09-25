function Collection() {
  return (
    <div className="bg-gray-600 font-bold min-h-screen">
      <h1 className="text-center text-4xl p-4">Collection</h1>
      <div id="completed">
        <h1 className="pl-4 text-3xl underline bg-blue-700">Completed</h1>
        <div id="completedList" className="pl-8 bg-blue-800">
          <ul className="list-disc pl-8 text-2xl">
            <li>HG Strike Freedom</li>
            <li>SD Gundam Nobunaga</li>
            <li>HG Infinite Justice</li>
            <li>HG Barbatos Lupus</li>
            <li>HG Ryusei-Go Graze</li>
            <li>SD Freedom Gundam</li>
            <li>Frame Arms Girls Jinghu</li>
            <li>RG Gundam Mk-II Titans</li>
            <li>HG Gundam Ez-8</li>
            <li>SD Gundam Aerial</li>
            <li>30 Minute Sisters Lirinel Color A</li>
            <li>HG Gundam Aerial</li>
            <li>Haro Basic Green</li>
            <li>HG Darilbalde</li>
            <li>HG ChuChu's Demi Trainer</li>
            <li>SD Unicorn Gundam</li>
          </ul>
        </div>
      </div>
      <div id="backlog">
        <h1 className="pl-4 text-3xl underline bg-yellow-700">Backlog</h1>
        <div id="backlogList" className="pl-8 bg-yellow-800">
          <ul className="list-disc pl-8 text-2xl">
            <li>HG Gundam Ground Type</li>
            <li>HG Guel's Dilanza</li>
            <li>MG Barbatos</li>
            <li>HG Gundam Lfrith</li>
            <li>HG Gundam Aerial Neon</li>
            <li>HG Gundam Ball Twin Set</li>
            <li>PG Unleashed RX-78-2 Gundam</li>
            <li>HG Gundam Flauros Ryusei-Go</li>
            <li>HG Gundam Schwarzette</li>
            <li>HG Gundam Calibarn</li>
            <li>SD Nu Gundam</li>
            <li>SD Astray Red Frame</li>
          </ul>
        </div>
      </div>
      <div id="wishlist">
        <h1 className="pl-4 text-3xl underline bg-red-700">Wishlist</h1>
        <div id="wishlistList" className="pl-8 bg-red-800">
          <ul className="list-disc pl-8 text-2xl">
            <li>HG Michaelis</li>
            <li>Full Mechanics Gundam Aerial</li>
            <li>RG RX-78-2 2.0</li>
            <li>RG Nu Gundam</li>
            <li>RG Hi-Nu Gundam</li>
            <li>MG RX-78-2 2.0</li>
            <li>MGEX Unicorn Gundam</li>
            <li>MGEX Strike Freedom Gundam</li>
            <li>PG Unleashed Nu Gundam</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Collection;
