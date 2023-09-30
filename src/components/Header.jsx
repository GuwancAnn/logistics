import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(true);
  };
  useEffect(() => {
    const checkResize = () => {
      // Close the menu if window width is greater than md breakpoint
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", checkResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", checkResize);
  }, []);
  const LoginBtn = () => {
    navigate("/login");
  };
  return (
    <>
      <div className=" flex justify-between  items-center">
        <img src="" alt="logo" className="w-32 h-12 max-sm:w-28  max-sm:h-8 " />

        <div className="lg:flex md:flex justify-between items-center max-sm:hidden  sm:flex  ">
          <p className="lg:w-32 sm:w-[6rem] md:[7rem] font-medium text-[#9C422B] hover:text-[#B8543A] cursor-pointer lg:text-xl ">
            Platform
          </p>
          <p className="lg:w-32 hover:text-[#B8543A] cursor-pointer  sm:w-[6rem] font-medium text-[#9C422B] lg:text-xl">
            About
          </p>
          <p className="lg:w-32 md:[7rem] sm:w-[6rem]  hover:text-[#B8543A] cursor-pointer font-medium text-[#9C422B] lg:text-xl ">
            Contact
          </p>
          <p className="lg:w-32 md:[7rem] sm:w-[6rem] hover:text-[#B8543A] cursor-pointer font-medium text-[#9C422B]  lg:text-xl">
            News
          </p>
        </div>

        <button
          onClick={LoginBtn}
          className=" xs:hidden lg:inline-block md:block w-[138px] lg:w-40 h-10 rounded-md border-none bg-[#9C422B] hover:bg-[#B8543A]  max-sm:hidden sm:block sm:w-28 text-white"
        >
          Login
        </button>
        <button
          onClick={toggleMenu}
          className="lg:hidden md:hidden  sm:hidden  "
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z"
              fill="#2E3A59"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="lg:flex md:flex justify-between items-center sm:hidden   max-sm:z-10 max-sm:w-full">
          <p className="w-32 font-medium text-[#9C422B] ">Platform</p>
          <p className="w-32 font-medium text-[#9C422B] ">About</p>
          <p className="w-32 font-medium text-[#9C422B] ">Contact</p>
          <p className="w-32 font-medium text-[#9C422B] ">News</p>
        </div>
      )}
    </>
  );
}

export default Header;
