import React from "react";
import { Form, Link } from "react-router-dom";

const Formredirect = () => {
  return (
    <div
      className="pt-20 h-screen w-full flex flex-col items-center font-inter gap-y-16"
      style={{ backgroundColor: "#FFF5F5" }}
    >
      <p className="header text-3xl md:text-4xl font-bold text-center tracking-wide">
        Registration form for OSMHack2023
      </p>
      <div className="flex flex-col flex-wrap gap-5 mt-10 items-center">
        <Link to="/form">
          <p className="bg-btn   text-center text-xl md:text-2xl  bg-dblue text-white p-6 hover:bg-dgreen focus:ring  active:translate-y-1">
            Apply through website
          </p>
        </Link>
        <p className="text-2xl ">OR</p>
        <a
          href="https://forms.gle/nh8JywfHmHEfZFRQ8"
          target="_"
          className="  text-center  text-xl md:text-2xl bg-dblue text-white p-6 hover:bg-dgreen  active:translate-y-1"
        >
          Apply through Google Forms
        </a>
      </div>
    </div>
  );
};

export default Formredirect;
