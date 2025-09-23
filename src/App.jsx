import { useState } from "react";
import "./index.css";

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
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://m.media-amazon.com/images/I/71fXBvrpKQL._AC_SX679_.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">PG RX-78-2 Gundam</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/2786/5582/products/sd-gundam-ex-standard-strike-freedom-gundam-pa_1.jpg?v=1632839588"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">
              SD Strike Freedom Gundam
            </h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/2786/5582/products/191_3419_s_to0m866o5x5p8duhwc8b2f6wjvxz_clipped_rev_1.png?v=1654125452"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">MG Gundam Barbatos</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://i.redd.it/tq8tix7ndaua1.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">HG Gundam Aerial</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://m.media-amazon.com/images/I/71BH1f+fplL.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">Haro Basic Green</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://m.media-amazon.com/images/I/71fXBvrpKQL._AC_SX679_.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">PG RX-78-2 Gundam</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/2786/5582/products/sd-gundam-ex-standard-strike-freedom-gundam-pa_1.jpg?v=1632839588"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">
              SD Strike Freedom Gundam
            </h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/2786/5582/products/191_3419_s_to0m866o5x5p8duhwc8b2f6wjvxz_clipped_rev_1.png?v=1654125452"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">MG Gundam Barbatos</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://i.redd.it/tq8tix7ndaua1.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">HG Gundam Aerial</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://m.media-amazon.com/images/I/71BH1f+fplL.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">Haro Basic Green</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://m.media-amazon.com/images/I/71fXBvrpKQL._AC_SX679_.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">PG RX-78-2 Gundam</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/2786/5582/products/sd-gundam-ex-standard-strike-freedom-gundam-pa_1.jpg?v=1632839588"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">
              SD Strike Freedom Gundam
            </h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/2786/5582/products/191_3419_s_to0m866o5x5p8duhwc8b2f6wjvxz_clipped_rev_1.png?v=1654125452"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">MG Gundam Barbatos</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://i.redd.it/tq8tix7ndaua1.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">HG Gundam Aerial</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://m.media-amazon.com/images/I/71BH1f+fplL.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">Haro Basic Green</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://m.media-amazon.com/images/I/71fXBvrpKQL._AC_SX679_.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">PG RX-78-2 Gundam</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/2786/5582/products/sd-gundam-ex-standard-strike-freedom-gundam-pa_1.jpg?v=1632839588"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">
              SD Strike Freedom Gundam
            </h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/2786/5582/products/191_3419_s_to0m866o5x5p8duhwc8b2f6wjvxz_clipped_rev_1.png?v=1654125452"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">MG Gundam Barbatos</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://i.redd.it/tq8tix7ndaua1.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">HG Gundam Aerial</h2>
          </div>
          <div
            id="card"
            className="bg-gray-100 border-3 rounded-xl flex flex-col"
          >
            <img
              src="https://m.media-amazon.com/images/I/71BH1f+fplL.jpg"
              className="w-[90%] mx-auto pt-4"
            />
            <h2 className="text-center mt-auto p-4">Haro Basic Green</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
