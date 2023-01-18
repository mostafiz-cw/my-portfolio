import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section>
        <div className="md:flex md:justify-between">
          <div className="md:w-1/2 herotextbg h-screen">
            <div className="flex flex-col h-[80%] justify-center ml-10">
              <p className="text-white text-5xl font-bold pb-5">
                Mostafizur Rahman
              </p>
              <div className="text-white text-3xl font-normal pb-5">
                <TypeAnimation
                  sequence={[
                    "Front-End Developer",
                    1000,
                    "React Developer",
                    1000,
                    "Mern Stack Developer",
                    1000,
                  ]}
                  wrapper="h2"
                  repeat={Infinity}
                />
              </div>

              {/* <p className="text-white text-3xl font-normal pb-5">Front End Developer</p> */}
              <button className="bg-[#780EFF] text-white w-36 py-2 font-semibold rounded-lg">
                Resume
              </button>
            </div>
          </div>
          <div className="md:w-1/2 h-screen">
            <img
              className="h-screen w-full object-cover"
              src="https://i.ibb.co/sqbSP2S/hero-img3.png"
              alt="heroimg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
