import { useState } from "react";

export default function Profile({ user }) {
  const completedCount = user.kits
    ? user.kits.filter((kit) => kit.status === "completed").length
    : 0;

  const [following, setFollowing] = useState(false);

  const handleChange = () => {
    setFollowing(!following);
  };

  return (
    <div className="font-bold gap-2">
      <h1 className="text-center text-4xl p-4 font-serif pb-8">Profile</h1>

      <img
        src={user.profilePic}
        alt={`${user.username} Profile Pic`}
        className="mx-auto rounded-full object-cover h-50 w-50 border text-white"
      />

      <h1 className="text-center pt-2 text-3xl">{user.username}</h1>

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

      <div className="flex flex-wrap justify-center gap-8 p-4">
        {user.uploadedImages.map((item, index) => (
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
