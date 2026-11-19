const mostPlayedGames = [
  { img: "images/top-game-01.jpg", genre: "Adventure", title: "Assasin Creed" },
  { img: "images/top-game-02.jpg", genre: "Adventure", title: "Assasin Creed" },
  { img: "images/top-game-03.jpg", genre: "Adventure", title: "Assasin Creed" },
  { img: "images/top-game-04.jpg", genre: "Adventure", title: "Assasin Creed" },
  { img: "images/top-game-05.jpg", genre: "Adventure", title: "Assasin Creed" },
  { img: "images/top-game-06.jpg", genre: "Adventure", title: "Assasin Creed" },
];

export default function MostPlayed() {
  return (
    <section className="bg-[#f5f5f5] rounded-[50px] lg:rounded-[100px] px-[30px] py-[80px] lg:px-[100px] lg:py-[150px] flex flex-col justify-center items-start gap-[10px]">
      <span className="text-[1rem] text-btn font-bold uppercase">
        TOP GAMES
      </span>
      <div className="w-full flex justify-between items-center pb-[50px]">
        <h2 className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2.25rem] font-bold">
          Most Played
        </h2>
        <a
          href="#all-most-played"
          className="bg-btn text-[0.875rem] text-white font-medium border-2 border-btn rounded-[50px] px-[20px] py-[8px] uppercase no-underline transition-all duration-300 hover:bg-white hover:text-black hover:border-black hover:-translate-y-[5px]"
        >
          view all
        </a>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[40px] lg:gap-[20px]">
        {mostPlayedGames.map((game, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col justify-center items-center bg-white rounded-[30px] gap-[10px] pb-[30px]"
          >
            <div className="w-full">
              <img
                src={game.img}
                alt={game.title}
                loading="lazy"
                className="w-full rounded-[30px]"
              />
            </div>
            <span className="text-[1rem] text-[#9c9b9b]">{game.genre}</span>
            <span className="text-black font-semibold text-[1rem] transition-colors duration-300 group-hover:text-accent">
              {game.title}
            </span>
            <a
              href="#explore"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-btn text-[0.875rem] text-white font-medium border-2 border-btn rounded-[50px] px-[18px] py-[6px] uppercase no-underline transition-colors duration-300 group-hover:bg-accent group-hover:border-accent"
            >
              explore
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
