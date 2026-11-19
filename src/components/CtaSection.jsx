export default function CtaSection() {
  return (
    <section
      id="shop"
      className="w-full px-[30px] py-[80px] lg:px-[100px] lg:py-[150px]"
    >
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center gap-[30px] lg:gap-0 justify-items-center">
        <img
          src="images/top-game-02.jpg"
          alt="Featured game"
          className="md:col-span-2 w-full max-w-[350px] lg:max-w-none lg:w-[400px] h-auto lg:h-[450px] object-cover block rounded-[30px]"
        />

        <div className="relative lg:absolute lg:top-[10%] lg:left-[12%] xl:left-[18%] flex flex-col justify-center gap-[20px] items-start bg-[#f5f5f5] rounded-[20px] w-full max-w-[400px] lg:w-[350px] h-auto lg:h-[420px] p-[30px]">
          <span className="text-[0.875rem] text-btn font-bold uppercase">
            Our Shop
          </span>
          <h2 className="text-[1.5rem] lg:text-[1.8rem] font-bold leading-snug">
            Go Pre-Order Buy & Get Best{" "}
            <span className="text-accent">Prices</span> For You!
          </h2>
          <p className="text-[#4a4a4a] leading-relaxed">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
            incididunt.
          </p>
          <a
            href="#shop-now"
            className="w-[150px] text-center bg-btn text-[0.875rem] text-white font-medium border-2 border-btn rounded-[50px] py-[10px] px-[15px] uppercase no-underline transition-all duration-300 hover:bg-white hover:text-black hover:border-black hover:-translate-y-[5px]"
          >
            shop now
          </a>
        </div>

        <div className="relative lg:absolute lg:top-[28%] lg:right-[12%] xl:right-[18%] flex flex-col justify-center gap-[20px] items-start bg-[#f5f5f5] rounded-[20px] w-full max-w-[400px] lg:w-[350px] h-auto lg:h-[340px] p-[30px]">
          <span className="text-[0.875rem] text-btn font-bold uppercase">
            newsletter
          </span>
          <h2 className="text-[1.5rem] lg:text-[1.8rem] font-bold leading-snug">
            Get Up To $100 Off Just Buy{" "}
            <span className="text-accent">Subscribe</span> Newsletter!
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex justify-start items-center relative w-full h-[42px]"
          >
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full h-full pl-[15px] pr-[120px] bg-white border-2 border-white rounded-[50px] outline-none text-black"
            />
            <button
              type="submit"
              className="h-full px-[14px] text-[0.75rem] absolute right-0 top-1/2 -translate-y-1/2 bg-btn text-white font-medium border-2 border-btn rounded-[50px] uppercase cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:border-black"
            >
              subscribe now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
