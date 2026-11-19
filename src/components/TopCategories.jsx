const categories = [
  { title: "Action", img: "images/categories-01.jpg" },
  { title: "Action", img: "images/categories-05.jpg" },
  { title: "Action", img: "images/categories-03.jpg" },
  { title: "Action", img: "images/categories-04.jpg" },
  { title: "Action", img: "images/categories-05.jpg" },
];

export default function TopCategories() {
  return (
    <section className="px-[30px] py-[80px] lg:px-[100px] lg:py-[150px] flex flex-col justify-center items-center gap-[10px]">
      <span className="text-[1rem] text-btn font-bold uppercase">
        TOP GAMES
      </span>
      <h2 className="pb-[50px] text-[1.5rem] sm:text-[1.8rem] lg:text-[2.25rem] font-bold">
        Top Categories
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[25px] lg:gap-[20px]">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between items-center bg-accent rounded-[30px] gap-[10px] overflow-hidden"
          >
            <span className="text-white font-semibold text-[1.1rem] pt-[20px] pb-[10px]">
              {cat.title}
            </span>
            <div className="w-full">
              <img
                src={cat.img}
                alt={cat.title}
                loading="lazy"
                className="w-full rounded-[30px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
