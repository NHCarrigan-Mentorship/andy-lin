import { Link } from "react-router-dom";
import { users } from "../users";
import { demoUser } from "../userData";

export default function Social() {
  const otherUsers = users.filter((u) => u.id !== demoUser.id);

  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold pb-6">Social</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {otherUsers.map((user) => (
          <Link
            key={user.id}
            to={`/profile/${user.id}`}
            className="flex flex-col items-center border-4 p-4 rounded-lg w-75 bg-gray-400 transition duration-300  hover:bg-gray-800 group"
          >
            <img
              src={user.profilePic}
              alt={user.username}
              className="w-30 h-30 rounded-full object-cover mb-2 border-2 text-white transition duration-300 group-hover:brightness-50"
            />
            <span className="text-xl font-semibold">{user.username}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
