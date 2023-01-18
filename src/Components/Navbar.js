import React, { useState } from "react";

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => setmenu(!menu)}
          className="md:hidden fixed top-3 left-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328" />
            <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328" />
            <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328" />
          </svg>
        </button>
        <nav className="hidden md:block fixed top-8 left-1/3 py-4 w-auto border-solid border-[3px] rounded-full px-14 bg-white">
          <ul className="md:flex text-base font-semibold">
            <li className="pr-6">Home</li>
            <li className="pr-6">Features</li>
            <li className="pr-6">Pricing</li>
            <li className="pr-6">Log In</li>
            <li>Sign Up</li>
          </ul>
        </nav>
        <nav
          className={`z-[99999] mobile bg-[#354895] text-white h-screen fixed top-0 left-0 w-full transition-all duration-[400ms] ease-in-out ${
            menu ? "translate-x-[-0]" : "translate-x-[-100%]"
          }`}
        >
          <button
            onClick={() => setmenu(false)}
            className="absolute top-3 left-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 10.9394L16.9697 5.96961L18.0304 7.03027L13.0606 12L18.0303 16.9697L16.9697 18.0304L12 13.0607L7.03045 18.0302L5.96979 16.9696L10.9393 12L5.96973 7.03042L7.03039 5.96976L12 10.9394Z"
                fill="white"
              />
            </svg>
          </button>
          <ul className="mt-20 text-3xl font-bold ml-5">
            <li className="pb-5">Home</li>
            <li className="pb-5">Features</li>
            <li className="pb-5">Pricing</li>
            <li className="pb-5">Log In</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
