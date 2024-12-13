const TrendingGames = () => {
    
    const games = [
      {
        id: "1",
        title: "The Legend of Zelda: Breath of the Wild",
        genre: "Action-Adventure",
        rating: 9.5,
        image:
          "https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_Hub_TheLegendOfZelda_ToTK_image1280w.jpg",
      },
      {
        id: "2",
        title: "Elden Ring",
        genre: "RPG",
        rating: 9.8,
        image:
          "https://assets.xboxservices.com/assets/1d/5b/1d5bc84f-2135-4e2f-8ca6-bb000d97db7f.jpg?n=Elden-Ring_GLP-Poster-Image-1084_1920x1080.jpg",
      },
      {
        id: "3",
        title: "God of War Ragnarok",
        genre: "Action",
        rating: 9.7,
        image:
          "https://www.stealthgaming.net/wp-content/uploads/2023/07/god-of-war-ragnarok-2_zbsy.jpg.webp",
      },
      {
        id: "4",
        title: "Cyberpunk 2077",
        genre: "Action RPG",
        rating: 8.9,
        image:
          "https://cdn.mos.cms.futurecdn.net/UcXeK6DWKBWdc3Ao4TZ9nU.jpg",
      },
      {
        id: "5",
        title: "Horizon Forbidden West",
        genre: "Action-Adventure",
        rating: 9.1,
        image:
          "https://www.nixxes.com/wp-content/uploads/2024/03/featured-img-hfw.jpg",
      },
    ];
  
    return (
      <div className="min-h-screen bg-sky-200 py-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Trending Games
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-700">
                  {game.title}
                </h2>
                <p className="text-gray-500 mb-2">
                  <strong>Genre:</strong> {game.genre}
                </p>
                <p className="text-gray-500">
                  <strong>Rating:</strong> {game.rating}/10
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TrendingGames;
  