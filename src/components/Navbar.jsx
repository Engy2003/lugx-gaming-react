import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full flex justify-between items-center px-[30px] lg:px-[100px] py-[20px] gap-[50px] text-white bg-cover bg-center"
      style={{ backgroundImage: 'url("images/header-bg.jpg")' }}
    >
      <div className="w-[100px] h-[40px]">
        <a href="#home">
          <img className="w-[100px] h-[40px]" src="images/logo.png" alt="logo" />
        </a>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="lg:hidden flex flex-col justify-between w-[30px] h-[20px] cursor-pointer z-[101] relative bg-transparent border-none p-0"
      >
        <span
          className={`block w-full h-[3px] bg-white rounded-[5px] transition-all duration-300 ${
            isOpen ? "translate-y-[8.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block w-full h-[3px] bg-white rounded-[5px] transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-full h-[3px] bg-white rounded-[5px] transition-all duration-300 ${
            isOpen ? "-translate-y-[8.5px] -rotate-45" : ""
          }`}
        />
      </button>

      <nav
        className={`fixed lg:static top-0 ${
          isOpen ? "right-0" : "-right-[320px]"
        } w-[300px] max-w-[80%] lg:w-auto lg:max-w-none h-screen lg:h-auto bg-accent/85 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none shadow-[-5px_0_15px_rgba(0,0,0,0.1)] lg:shadow-none flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-[30px] lg:gap-[50px] transition-[right] duration-400 z-[100]`}
      >
        <ul className="flex flex-col lg:flex-row justify-between items-center gap-[30px] lg:gap-[50px] list-none mb-[30px] lg:mb-0">
          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="no-underline text-white text-[1.2rem] px-[15px] py-[10px] hover:bg-white/20 hover:rounded-[50px] transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#shop"
              onClick={() => setIsOpen(false)}
              className="no-underline text-white text-[1.2rem] px-[15px] py-[10px] hover:bg-white/20 hover:rounded-[50px] transition-all"
            >
              Our Shop
            </a>
          </li>
          <li>
            <a
              href="#details"
              onClick={() => setIsOpen(false)}
              className="no-underline text-white text-[1.2rem] px-[15px] py-[10px] hover:bg-white/20 hover:rounded-[50px] transition-all"
            >
              Product Details
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="no-underline text-white text-[1.2rem] px-[15px] py-[10px] hover:bg-white/20 hover:rounded-[50px] transition-all"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <a
          href="#signin"
          onClick={() => setIsOpen(false)}
          className="bg-btn text-[0.875rem] text-white font-medium border-2 border-btn rounded-[50px] px-[20px] py-[8px] uppercase no-underline transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:-translate-y-[5px]"
        >
          sign in
        </a>
      </nav>
    </header>
  );
}