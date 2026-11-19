const trendingGames = [
  {
    img: "images/trending-01.jpg",
    oldPrice: "$28",
    newPrice: "$20",
    genre: "Action",
    title: "Assasin Creed",
  },
  {
    img: "images/trending-02.jpg",
    oldPrice: null,
    newPrice: "$44",
    genre: "Action",
    title: "Assasin Creed",
  },
  {
    img: "images/trending-03.jpg",
    oldPrice: "$64",
    newPrice: "$44",
    genre: "Action",
    title: "Assasin Creed",
  },
  {
    img: "images/trending-04.jpg",
    oldPrice: null,
    newPrice: "$32",
    genre: "Action",
    title: "Assasin Creed",
  },
];

export default function TrendingGames() {
  return (
    <section className="px-[30px] py-[80px] lg:px-[100px] lg:py-[210px] flex flex-col justify-center items-start gap-[10px]">
      <span className="text-[1rem] text-btn font-bold uppercase">Trending</span>
      <div className="w-full flex justify-between items-center pb-[50px]">
        <h2 className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2.25rem] font-bold">
          Trending Games
        </h2>
        <a
          href="#all-trending"
          className="bg-btn text-[0.875rem] text-white font-medium border-2 border-btn rounded-[50px] px-[20px] py-[8px] uppercase no-underline transition-all duration-300 hover:bg-white hover:text-black hover:border-black hover:-translate-y-[5px]"
        >
          view all
        </a>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] lg:gap-[20px]">
        {trendingGames.map((game, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-center items-start bg-[#f5f5f5] rounded-[30px] overflow-hidden"
          >
            <div className="w-full relative">
              <img
                src={game.img}
                alt={game.title}
                loading="lazy"
                className="w-full h-[200px] object-cover rounded-[30px]"
              />
              <div className="absolute z-[3] flex flex-col justify-center items-center bg-accent text-white text-[1.1rem] font-semibold top-[15px] right-[15px] rounded-[10px] px-[10px] py-[4px]">
                {game.oldPrice && (
                  <span className="line-through text-[0.9rem] opacity-80">
                    {game.oldPrice}
                  </span>
                )}
                <span>{game.newPrice}</span>
              </div>
            </div>

            <span className="pt-[20px] px-[30px] pb-[2px] text-[1rem] text-[#9c9b9b]">
              {game.genre}
            </span>

            <div className="w-full flex justify-between items-center pt-[2px] px-[30px] pb-[20px]">
              <span className="text-black font-semibold text-[1rem] transition-colors duration-300 group-hover:text-accent">
                {game.title}
              </span>
              <a
                href="#cart"
                aria-label="Add to cart"
                className="bg-btn rounded-full w-[40px] h-[40px] flex justify-center items-center transition-colors duration-300 group-hover:bg-accent"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 7V5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V7H19.5C20.3284 7 21 7.67157 21 8.5V19.5C21 21.433 19.433 23 17.5 23H6.5C4.567 23 3 21.433 3 19.5V8.5C3 7.67157 3.67157 7 4.5 7H8ZM10 7V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V7H10ZM9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12ZM16 11C16 11.5523 15.5523 12 15 12C14.4477 12 14 11.5523 14 11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
