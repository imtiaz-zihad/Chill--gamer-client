import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;
    const title = form.title.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genres = form.genres.value;
    const email = form.email.value;
    const username = form.username.value;

    const data = {
      image:image,
      title:title,
      review:review,
      rating:rating,
      year:year,
      genres:genres,
      email:email,
      username:username
    };

    fetch('https://chill-gamer-server-mauve.vercel.app/addReview',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
  
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()).then((result) =>{
        console.log(result);
  
        if (result.insertedId) {
          Swal.fire({
            title: "Added!",
            text: "Your data has been added.",
            icon: "success"
          });
        }
        
      })
  };
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Add New Game Review
      </h2>
      <form onSubmit={handleAddReview}>
        {/* Game Cover URL */}
        <div className="mb-4">
          <label
            htmlFor="coverUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Game Cover URL
          </label>
          <input
            type="url"
            name="image"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Game Title */}
        <div className="mb-4">
          <label
            htmlFor="gameTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Game Title
          </label>
          <input
            type="text"
            name="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter game title"
            required
          />
        </div>

        {/* Review Description */}
        <div className="mb-4">
          <label
            htmlFor="reviewDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Review Description
          </label>
          <textarea
            name="review"
            rows="2"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your review"
            required
          ></textarea>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating (1-10)
          </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="10"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a rating"
            required
          />
        </div>

        {/* Publishing Year */}
        <div className="mb-4">
          <label
            htmlFor="publishingYear"
            className="block text-sm font-medium text-gray-700"
          >
            Publishing Year
          </label>
          <input
            type="number"
            name="year"
            min="1900"
            max={new Date().getFullYear()}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter publishing year"
            required
          />
        </div>

        {/* Genres */}
        <div className="mb-4">
          <label
            htmlFor="genres"
            className="block text-sm font-medium text-gray-700"
          >
            Genres
          </label>
          <select
            name="genres"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
          </select>
        </div>

        {/* User Email */}
        <div className="mb-4">
          <label
            htmlFor="userEmail"
            className="block text-sm font-medium text-gray-700"
          >
            User Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
            value={user.email}
            readOnly
          />
        </div>

        {/* User Name */}
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-700"
          >
            User Name
          </label>
          <input
            type="text"
            name="username"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
            value={user.displayName}
            readOnly
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
