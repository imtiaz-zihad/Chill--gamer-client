const Promotional = () => {
    const promotions = [
      {
        id: 1,
        title: "Winter Sale",
        description: "Get up to 50% off on all gaming accessories.",
        image: "https://www.u7buy.com/blog/wp-content/uploads/2024/09/6-5.png",
      },
      {
        id: 2,
        title: "New Arrivals",
        description: "Check out the latest games and gadgets in store.",
        image: "https://www.gadgeticloud.com/cdn/shop/articles/must_have_gaming_accessories_gadgeticloud_blog_banner_1024x1024.jpg?v=1554088621",
      },
      {
        id: 3,
        title: "Exclusive Membership",
        description: "Join now and enjoy exclusive perks and discounts.",
        image: "https://www.thetechedvocate.org/wp-content/uploads/2023/07/Best-Gaming-Subscription-Services.jpg",
      },
    ];
  
    return (
      <div className="bg-sky-200 py-10 mt-10">
        <h1 className="text-4xl font-bold text-center mb-6">Promotions</h1>
        <p className="text-center text-gray-700 mb-8">
          Discover the latest deals and offers tailored just for you!
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform ease-in-out"
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-40 object-cover rounded-t-lg transition-opacity duration-300 hover:opacity-90"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                {promo.title}
              </h2>
              <p className="text-gray-600 mt-2">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Promotional;
  