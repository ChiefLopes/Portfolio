import React from "react";
import Nav from "./Nav";
import woman from "../../assets/Images/woman.png"

const Home = () => {
  return (
    <section className="w-full h-[100vh] bg-slate-200">
      <Nav />

      <div className="my-[5.5rem] flex justify-between px-[6rem]">
        <div>
          <div className="pl-4">
            <h1 className="text-3xl font-bold text-black-700 leading-10">
              Step into the Digital <br /> Spotlight with Lauren
            </h1>
            <p className="text-black-700 leading-7 mt-7">
              Are you ready to elevate your digital presence and marketing
              strategy? Well, you're <br /> in the right place. Meet Lauren
              Anderson James, your digital guru, strategist, and <br /> campaign
              mastermind. Let's turn your online dreams into reality.
            </p>
            <div className="flex py-5">
              <button className="bg-blue-400 rounded-md text-white px-4 py-2 h-10 w-40 text-sm">
                See all my services
              </button>
              <button className="text-blue-400 ml-7 rounded-md border-2 border-blue-400 h-10 w-40 text-sm">
                See my portfolio
              </button>
            </div>
          </div>
        </div>

        <div
          className="rounded-full h-80 w-80 mr-[2rem]"
          style={{ backgroundColor: "hsla(292, 92%, 42%, 2)" }}>
          <img
            src={woman}
            alt="woman with blonde hair"
            className="h-80 w-80 my-2"
          />
        </div>
      </div>

      <div className="bg-slate-800 h-[8.5rem] relative bottom-20 flex justify-around px-18 py-9 space-x-12 text-white text-2xl text-center">
        <div className="">
          <p className="text-4xl font-bold mr-3">12+</p>
          <p className="text-sm">Years of experience</p>
        </div>
        <div className="">
          <p className="text-4xl font-bold mr-3">44+</p>
          <p className="text-sm">Completed projects</p>
        </div>
        <div className="">
          <p className="text-4xl font-bold mr-3">200+</p>
          <p className="text-sm">Satisfied clients</p>
        </div>
        <div className="">
          <p className="text-4xl font-bold mr-3">50+</p>
          <p className="text-sm">Awards and nominations</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
