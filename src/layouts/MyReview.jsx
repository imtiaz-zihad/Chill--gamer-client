import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const [findData, setFindData] = useState(
    data.filter((item) => item.email === user.email)
  );
  const [openReview, setOpenReview] = useState(null);

  const handleDelete = (id) => {
    fetch(`https://chill-gamer-server-mauve.vercel.app/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const newData = findData.filter((review) => review._id !== id);
        setFindData(newData);
        Swal.fire({
          title: "Deleted!",
          text: "Your review has been deleted.",
          icon: "success",
        });
      })
      .catch((error) => console.error("Error deleting review:", error));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedReview = {
      title: e.target.title.value,
      rating: e.target.rating.value,
      genres: e.target.genres.value,
      year: e.target.year.value,
    };

    fetch(`https://chill-gamer-server-mauve.vercel.app/review/${openReview._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then(() => {
        const updatedData = findData.map((review) =>
          review._id === openReview._id
            ? { ...review, ...updatedReview }
            : review
        );
        setFindData(updatedData);
        Swal.fire({
          title: "Updated!",
          text: "Your review has been updated.",
          icon: "success",
        });
        setOpenReview(null);
      })
      .catch((error) => console.error("Error updating review:", error));
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
        My Reviews
      </h1>
      {findData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-4">Genre</th>
                <th className="py-3 px-4">Year</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {findData.map((review, index) => (
                <tr
                  key={review._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  } text-gray-800`}
                >
                  <td className="py-3 px-4 text-center">{index + 1}</td>
                  <td className="py-3 px-4">{review.title}</td>
                  <td className="py-3 px-4">{review.rating}</td>
                  <td className="py-3 px-4">{review.genres}</td>
                  <td className="py-3 px-4">{review.year}</td>
                  <td className="py-3 px-4 flex gap-2 justify-center">
                    <button
                      onClick={() => setOpenReview(review)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 text-center text-sm sm:text-base">
          You have no reviews yet.
        </p>
      )}

      {openReview && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Update Review</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={openReview.title}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Rating</label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={openReview.rating}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Genre</label>
                <input
                  type="text"
                  name="genres"
                  defaultValue={openReview.genres}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Year</label>
                <input
                  type="text"
                  name="year"
                  defaultValue={openReview.year}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpenReview(null)}
                  className="mr-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReview;
