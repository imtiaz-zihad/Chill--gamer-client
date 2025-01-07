const BlogSection = () => {
    const blogs = [
      {
        id: 1,
        title: "Top 10 Games of 2024",
        description:
          "Explore the hottest games of the year and find out why they are a must-play for every gamer!",
        image:
          "https://media.altchar.com/prod/images/gm_featured_image/42b745b92a7b-best-upcoming-rpgs-in-2025.jpg",
        link: "https://www.altchar.com/features/biggest-rpgs-were-excited-to-play-in-2025-atF0s1o4mKDx",
      },
      {
        id: 2,
        title: "Ultimate Gaming Accessories",
        description:
          "Boost your gaming experience with these must-have accessories for every setup.",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2023_09/3596444/230228-gaming-accessories-vl-2x1.jpg",
        link: "https://www.nbcnews.com/select/shopping/best-gaming-accessories-ncna1303182",
      },
      {
        id: 3,
        title: "Next-Gen Consoles: What to Expect",
        description:
          "Get the scoop on the latest consoles hitting the market and how they redefine gaming.",
        image: "https://www.videogameschronicle.com/files/2021/11/PS5-and-Xbox-Series-X-split.jpg",
        link: "https://www.xvkdfashion.shop/?ggcid=8982841",
      },
    ];
  
    return (
      <section className="bg-sky-200 py-10 mt-10">
        <h2 className="text-4xl font-bold text-center mb-6">Latest Blogs</h2>
        <p className="text-center text-gray-700 mb-8">
          Stay updated with the latest news, reviews, and insights in gaming!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <a
                href={blog.link}
                target="_blank" // Open link in new tab
                rel="noopener noreferrer" // Security measure
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default BlogSection;
  