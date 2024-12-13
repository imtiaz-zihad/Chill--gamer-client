const Banner = () => {
  return (
    <div className="my-10">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://www.reviewtrackers.com/wp-content/uploads/blog-hero_game-review-sites-banner-1400x420.jpg"
            className="w-full h-[400px]"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://bloximages.newyork1.vip.townnews.com/thedaonline.com/content/tncms/assets/v3/editorial/9/5e/95e9cd32-2d9f-11e9-b257-ef0a0b71cf32/5c60d561945d6.image.jpg"
            className="w-full  h-[400px]"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ytimg.com/vi/7h1H5BWfVKk/sddefault.jpg"
            className="w-full  h-[400px]"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/Video-Game-Reviews.jpg"
            className="w-full  h-[400px]"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
