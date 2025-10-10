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
            className="flex flex-col items-center border-2 p-4 rounded-lg w-40 hover:shadow-lg transition"
          >
            <img
              src={user.profilePic}
              alt={user.username}
              className="w-24 h-24 rounded-full object-cover mb-2 border-2 text-white"
            />
            <span className="text-xl font-semibold">{user.username}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
