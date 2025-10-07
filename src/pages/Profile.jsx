import { kits } from "../userKits";
import { useState } from "react";

export default function Profile() {
  const completedCount = kits.filter(
    (kit) => kit.status === "completed"
  ).length;
  const [following, setFollowing] = useState(false);

  const handleChange = () => {
    setFollowing(!following);
  };

  const uploadedImages = [
    {
      name: "HG Darilbalde",
      image:
        "https://preview.redd.it/tried-candy-coating-the-darilbalde-with-rattle-cans-v0-msvksg2tlqmb1.jpg?width=640&crop=smart&auto=webp&s=392ce84455f95c81c5a74e0e14be6465401360ea",
    },
    {
      name: "HG Schwarzette",
      image:
        "https://preview.redd.it/custom-schwarzette-v0-u3o6n1iibbtf1.jpg?width=1080&crop=smart&auto=webp&s=4a5c328704a6023b369fa0f226c4c87f265800b5",
    },
    {
      name: "PG RX-78-2",
      image:
        "https://preview.redd.it/first-ever-model-kit-pg-rx-78-unleashed-v0-qs26yc8u7dmf1.jpg?width=640&crop=smart&auto=webp&s=07f824b4a082a66ee14ce8d5373a620a41a4e6eb",
    },
    {
      name: "HG Barbatos",
      image:
        "https://preview.redd.it/just-built-barbatos-with-an-artorias-pose-v0-bfl8x5eoel6e1.jpeg?width=640&crop=smart&auto=webp&s=16f7ad6c331a1daa5e3c55dbbedcaca073fc4cbf",
    },
    {
      name: "HG Darilbalde",
      image:
        "https://preview.redd.it/tried-candy-coating-the-darilbalde-with-rattle-cans-v0-msvksg2tlqmb1.jpg?width=640&crop=smart&auto=webp&s=392ce84455f95c81c5a74e0e14be6465401360ea",
    },
    {
      name: "HG Schwarzette",
      image:
        "https://preview.redd.it/custom-schwarzette-v0-u3o6n1iibbtf1.jpg?width=1080&crop=smart&auto=webp&s=4a5c328704a6023b369fa0f226c4c87f265800b5",
    },
    {
      name: "PG RX-78-2",
      image:
        "https://preview.redd.it/first-ever-model-kit-pg-rx-78-unleashed-v0-qs26yc8u7dmf1.jpg?width=640&crop=smart&auto=webp&s=07f824b4a082a66ee14ce8d5373a620a41a4e6eb",
    },
    {
      name: "HG Barbatos",
      image:
        "https://preview.redd.it/just-built-barbatos-with-an-artorias-pose-v0-bfl8x5eoel6e1.jpeg?width=640&crop=smart&auto=webp&s=16f7ad6c331a1daa5e3c55dbbedcaca073fc4cbf",
    },
  ];

  return (
    <div className="font-bold gap-2">
      <h1 className="text-center text-4xl p-4 font-serif pb-8">Profile</h1>
      <img
        src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=1200,height=675/catalog/crunchyroll/a0a016ce3473ceb587d2d0583c8bcc0f.jpe"
        alt="Profile Pic"
        className="mx-auto rounded-full object-cover h-50 w-50 border text-white"
      />
      <h1 className="text-center pt-2 text-3xl">Beast Jr</h1>
      <h2 className="text-center text-xl text-gray-900 pb-2">
        {completedCount} Kits Built
      </h2>
      {following ? (
        <button
          className="block mx-auto border-2 p-2 rounded-lg bg-red-800 hover:bg-gray-800 w-40 text-white"
          onClick={handleChange}
        >
          Unfollow
        </button>
      ) : (
        <button
          className="block mx-auto border-2 p-2 rounded-lg bg-blue-800 hover:bg-gray-700 w-40 text-white"
          onClick={handleChange}
        >
          Follow
        </button>
      )}
      <h1 className="text-center pt-6 text-xl">Uploaded photos</h1>
      <p className="text-center text-sm italic pb-2">
        *Pictures are not mine, just using for demo
      </p>
      <div
        id="uploadedImages"
        className="flex flex-wrap justify-center gap-8 p-4"
      >
        {uploadedImages.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-2 p-2 rounded hover:shadow-lg transition w-[45%] sm:w-[30%] md:w-[20%] bg-gray-400"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-contain mb-2"
            />
            <span className="text-center text-xl">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
