import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllReview = () => {
  const data = useLoaderData();
  const [sortedData, setSortedData] = useState(data);


  const handleSort = (sortid) => {
    const sorted = [...sortedData].sort((a, b) => a[sortid] - b[sortid]);
    setSortedData(sorted);
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center mb-8">All Reviews</h1>

      
      <div className="flex justify-center mb-6">
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="" disabled selected>
            Sort by
          </option>
          <option value="rating">Rating </option>
          <option value="year">Year </option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedData.map((review) => (
          <div
            key={review._id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between"
          >
            <div className="flex flex-col justify-between flex-grow">
              <h2 className="text-xl font-semibold text-gray-800">
                {review.title}
              </h2>
              <div className="mt-4">
                <span className="block text-sm text-gray-500">
                  Rating: {review.rating}
                </span>
                <span className="block text-sm text-gray-500">
                  Year: {review.year}
                </span>
                <span className="block text-sm text-gray-500">
                  By: {review.username}
                </span>
              </div>
              <div className="mt-4">
                <a
                  href={`/review/${review._id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Explore Details
                </a>
              </div>
            </div>
            <div className="w-20 h-20">
              <img
                className="w-full h-full object-cover rounded-full"
                src={review.image}
                alt={review.username}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
