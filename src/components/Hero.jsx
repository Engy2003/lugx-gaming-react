const features = [
  { img: "images/featured-01.png", title: "Free Storage" },
  { img: "images/featured-02.png", title: "User More" },
  { img: "images/featured-03.png", title: "Reply Ready" },
  { img: "images/featured-04.png", title: "Easy Layout" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative rounded-b-[50px] lg:rounded-b-[100px] text-white flex flex-col lg:grid lg:grid-cols-2 items-center gap-[50px] lg:gap-[200px] px-[30px] pt-[50px] pb-[100px] lg:px-[100px] lg:pt-[100px] lg:pb-[200px] bg-cover bg-center"
      style={{ backgroundImage: 'url("images/header-bg.jpg")' }}
    >
      <article className="lg:justify-self-start relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full gap-[20px]">
        <span className="text-[1.5rem] uppercase">welcome to lugx</span>
        <h1 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[3rem] font-bold leading-tight">
          BEST GAMING SITE EVER!
        </h1>
        <img
          src="images/caption-dec.png"
          alt="caption-dec"
          className="relative lg:absolute lg:w-[200px] lg:left-1/2 lg:-translate-x-1/2 my-[10px] lg:my-0 block max-w-full"
        />
        <p className="leading-relaxed">
          LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
          gaming websites. You can download and use this layout for commercial
          purposes. Please tell your friends about TemplateMo.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center lg:justify-start items-center relative w-full max-w-[400px] h-[45px] mx-auto lg:mx-0"
        >
          <input
            type="text"
            placeholder="Type Something"
            className="w-full h-full pl-[15px] pr-[130px] py-[12px] bg-white text-black border-2 border-white rounded-[50px] outline-none"
          />
          <button
            type="submit"
            className="h-full absolute right-0 top-1/2 -translate-y-1/2 bg-btn text-[0.875rem] text-white font-medium border-2 border-btn rounded-[50px] px-[20px] uppercase cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            search now
          </button>
        </form>
      </article>

      <div className="lg:justify-self-end w-full max-w-[500px] lg:max-w-none lg:w-[80%] relative mx-auto lg:mx-0">
        <img
          src="images/banner-image.jpg"
          alt="a man wearing full iron armor"
          className="w-full h-auto lg:h-[70vh] object-cover block rounded-[30px]"
        />
        <span className="absolute z-[3] top-[15px] right-[15px] px-[14px] py-[4px] font-bold text-[1.5rem] rounded-[50px] bg-accent">
          $22
        </span>
        <span className="flex justify-center items-center w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] absolute bottom-0 left-0 z-[3] -translate-x-[20%] translate-y-[20%] lg:-translate-x-1/2 lg:-translate-y-1/2 font-bold text-[1.5rem] lg:text-[2rem] rounded-full bg-btn">
          -40%
        </span>
      </div>

      <div className="relative lg:absolute lg:bottom-[1px] lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 z-[3] lg:col-span-2 w-full lg:px-[100px] mt-[20px] lg:mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] lg:gap-[20px]">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="group h-[200px] flex flex-col justify-center items-center gap-[20px] bg-white text-black rounded-[30px] transition-transform duration-300 shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:-translate-y-[5px]"
          >
            <div className="flex justify-center items-center w-[100px] h-[100px] bg-accent group-hover:bg-btn rounded-full transition-colors duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-[50px] h-[50px]"
              />
            </div>
            <span className="text-[1rem] font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
