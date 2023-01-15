import React, { useState } from "react";

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  return (
    <>
      {menu ? (
        <button onClick={() => setmenu(false)} className="md:hidden absolute">
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
              fill="#1F2328"
            />
          </svg>
        </button>
      ) : (
        <button onClick={() => setmenu(!menu)} className="md:hidden absolute">
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
      )}

      <nav
        className={`md:block md:fixed absolute md:top-8 md:left-1/3 w-auto md:py-4 md:border-solid md:border-2 md:rounded-full md:z-50 md:px-16 md:bg-white z-[-1] ${
          menu
            ? "bg-slate-300 w-full md:w-auto h-screen md:h-auto fixed top-0 left-0 transition-all duration-500"
            : "-left-full transition-all duration-1000"
        }`}
      >
        <ul className="md:flex pt-20 md:pt-0 ml-4 text-3xl md:text-base font-semibold">
          <li className="md:pr-6 md:pb-0 pb-5">Home</li>
          <li className="md:pr-6 md:pb-0 pb-5">Features</li>
          <li className="md:pr-6 md:pb-0 pb-5">Pricing</li>
          <li className="md:pr-6 md:pb-0 pb-5">Log In</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
