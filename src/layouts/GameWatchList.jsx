import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const userWatchlist = data.filter((item) => item.watchby === user.email);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Your Game Watchlist
      </h1>
      {userWatchlist.length === 0 ? (
        <p className="text-center text-gray-600">No games added to your watchlist yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Genre</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Rating</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Added By</th>
              </tr>
            </thead>
            <tbody>
              {userWatchlist.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.genres}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.rating}/10</td>
                  <td className="border border-gray-300 px-4 py-2">{item.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GameWatchList;
