import { useContext } from "react";
import { useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const ReviewDetails = () => {
  
  const { user } = useContext(AuthContext);
  const reviewData = useLoaderData();

  
  const {email,genres,image,rating,review,title,username,year} = reviewData;
  
  console.log(email);
  

  const handleWatchList = async() =>{

    const data = {
      image:image,
      title:title,
      review:review,
      rating:rating,
      year:year,
      genres:genres,
      email:email,
      username:username,
      watchby:user.email
    };
    fetch('https://chill-gamer-server-mauve.vercel.app/watchlist',{
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
          text: "Added In WatchList.",
          icon: "success"
        });
      }
      
    })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-md max-w-2xl w-full overflow-hidden">
       
        <img
          src={reviewData.image}
          alt={`${reviewData.title} cover`}
          className="w-full h-80 object-cover border-b-2 border-gray-200"
        />

        
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {reviewData.title}
          </h1>
          <p className="text-gray-600 mb-6">{reviewData.review}</p>

          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>Rating:</strong> {reviewData.rating}/10
            </p>
            <p>
              <strong>Genre:</strong> {reviewData.genres}
            </p>
            <p>
              <strong>Reviewer:</strong> {reviewData.username}{" "}
              <span className="italic text-gray-500">({reviewData.email})</span>
            </p>
          </div>

         
          <div className="mt-6" 
          onClick={handleWatchList}
          >
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
