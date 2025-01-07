
import {Link, useLoaderData } from "react-router-dom";
import { Fade, Zoom } from 'react-awesome-reveal';


const HighestRatedGames = () => {
  const datas = useLoaderData();
  
  

  return (
    <section className="mb-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-black mb-8">
          Highest Rated Game
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {datas.map((data) => (
            <Fade key={data._id} duration={1000}>
              <div className="bg-sky-200 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <Zoom>
                  <img
                    src={data.image} 
                    alt={data.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                </Zoom>

                <p className="text-black">Rating: {data.rating}/10</p>
                <p className="text-black">Genre: {data.genres}</p>
                <p className="text-black">Year: {data.year}</p>
                <Link to={`/review/${data._id}`}>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Explore Details</button>
                  </div>
                </Link>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighestRatedGames;
