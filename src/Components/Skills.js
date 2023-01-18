import React from "react";

const Skills = () => {
  return (
    <>
      <section className="h-screen bg-purple-50">
        <p className="mx-auto text-center">Skills</p>
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-7 flex-wrap">
          <div className="w-[400px] h-32 border-2 rounded-lg bg-white flex items-center gap-5">
            <div className="pl-5">
              <img
                src="https://i.ibb.co/rQPzjjw/javascript-39404.png"
                alt="html5logo"
                className="w-[90px]"
              />
            </div>
            <p>Javascript</p>
          </div>
          <div className="w-[400px] h-32 border-2 rounded-lg bg-white flex items-center gap-5">
            <div className="pl-5">
              <img
                src="https://i.ibb.co/VBtzNZw/1174949-js-react-js-logo-react-react-native-icon.png"
                alt="html5logo"
                className="w-[90px]"
              />
            </div>
            <p>React JS</p>
          </div>
          <div className="w-[400px] h-32 border-2 rounded-lg bg-white flex items-center gap-5">
            <div className="pl-5">
              <img
                src="https://i.ibb.co/sWgmhCn/4375017-js-logo-node-icon.png"
                alt="html5logo"
                className="w-[90px]"
              />
            </div>
            <p>React JS</p>
          </div>
          <div className="w-[400px] h-32 border-2 rounded-lg bg-white flex items-center gap-5">
            <div className="pl-5">
              <img
                src="https://i.ibb.co/sWgmhCn/4375017-js-logo-node-icon.png"
                alt="html5logo"
                className="w-[90px]"
              />
            </div>
            <p>React JS</p>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default Skills;
