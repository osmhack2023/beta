import React from "react";
import "./style2.css";
import hancy from "./img2/hancy.png";
import aaku from "./img2/aaku.png";
import abinash from "./img2/abnsh.png";
import bridbalak from "./img2/bridbalak.png";
import dear from "./img2/dear.png";
import dipen from "./img2/dipen.png";
import ikku from "./img2/ikku.png";
import rajmaster from "./img2/rajmasr.png";
import ranji from "./img2/ranji.png";
import samir from "./img2/samir.png";
import suyog from "./img2/suog.png";
import sushal from "./img2/sushal.png";
import rishi from "./img2/rishi.png";
import bibisha from "./img2/bibisha.png";
import "./style2.css";
const Team = () => {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col gap-y-10"
        style={{ backgroundColor: "#E7F5FF" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold font-inter text-center text-rednew mt-10">
          ORGANIZERS
        </h1>
        <div className="flex flex-col justify-center items-center gap-y-5 pb-10">
          <h2 className="team-name text-4xl font-semibold text-center">
            Event Lead
          </h2>
          <img src={samir} className="h-72 w-72 " />
          <p className="text-2xl font-semibold">Samir Koirala</p>
        </div>
      </div>

      {/* /* RESOURCES */}
      <div
        className="flex flex-col justify-center items-center gap-y-16  p-16"
        style={{ backgroundColor: "#202A44" }}
      >
        <h2 className="team-name text-4xl font-semibold text-center">
          Resources
        </h2>

        <div className="flex flex-col md:flex-row  gap-y-20 justify-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={hancy} className="h-72 w-72 " />
            <p className="text-2xl ">Pradip Chapagain</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={ikku} className="h-72 w-72 " />
            <p className="text-2xl ">Anupama Rai</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={aaku} className="h-72 w-72 " />
            <p className="text-2xl ">Aakriti Adhikari</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={bibisha} className="h-72 w-72 " />
            <p className="text-2xl ">Bibisha Baniya</p>
          </div>
        </div>
      </div>
      {/* /* RESOURCES */}
      <div
        className="flex flex-col justify-center items-center gap-y-16 ' p-16"
        style={{ backgroundColor: "#E7F5FF" }}
      >
        <h2 className="team-name text-4xl font-semibold text-center">
          Technical Team
        </h2>

        <div className="flex flex-col md:flex-row  gap-y-20 justify-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={dear} className="h-72 w-72 " />
            <p className="text-2xl ">Hemanta Sharma</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={suyog} className="h-72 w-72 " />
            <p className="text-2xl ">Suyog Shrestha</p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center gap-y-16 ' p-16"
        style={{ backgroundColor: "#FFF5F5" }}
      >
        <h2 className="team-name text-4xl font-semibold text-center">
          Outreach Team
        </h2>

        <div className="flex flex-col md:flex-row  gap-y-20 justify-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={hancy} className="h-72 w-72 " />
            <p className="text-2xl ">Pradip Chapagain</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={rishi} className="h-72 w-72 " />
            <p className="text-2xl ">Rishi Aryal</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={suyog} className="h-72 w-72 " />
            <p className="text-2xl ">Suyog Shrestha</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={ranji} className="h-72 w-72 " />
            <p className="text-2xl ">Rohan Acharya</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={dear} className="h-72 w-72 " />
            <p className="text-2xl ">Hemanta Sharma</p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center gap-y-16 ' p-16"
        style={{ backgroundColor: "#E7F5FF" }}
      >
        <h2 className="team-name text-4xl font-semibold text-center">
          Web Team
        </h2>

        <div className="flex flex-col md:flex-row  gap-y-20 justify-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={hancy} className="h-72 w-72 " />
            <p className="text-2xl ">Pradip Chapagain</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={rajmaster} className="h-72 w-72 " />
            <p className="text-2xl ">Samip Lamsal</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={rishi} className="h-72 w-72 " />
            <p className="text-2xl ">Rishi Aryal</p>
          </div>
          {/* <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={suyog} className="h-72 w-72 " />
            <p className="text-2xl ">Suyog Shrestha</p>
          </div> */}
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center gap-y-16 ' p-16"
        style={{ backgroundColor: "#FFF5F5" }}
      >
        <h2 className="team-name text-4xl font-semibold text-center">
          Event Host
        </h2>

        <div className="flex flex-col md:flex-row  gap-y-20 justify-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={rajmaster} className="h-72 w-72 " />
            <p className="text-2xl ">Samip Lamsal</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={ikku} className="h-72 w-72 " />
            <p className="text-2xl ">Anupama Rai</p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center gap-y-16 ' p-16"
        style={{ backgroundColor: "#E7F5FF" }}
      >
        <h2 className="team-name text-4xl font-semibold text-center">
          Graphics Team
        </h2>

        <div className="flex flex-col md:flex-row  gap-y-20 justify-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={abinash} className="h-72 w-72 " />
            <p className="text-2xl ">Abhinash Tiwari</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={dipen} className="h-72 w-72 " />
            <p className="text-2xl ">Dipen</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={sushal} className="h-72 w-72 " />
            <p className="text-2xl ">Sushal Pokhrel</p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center gap-y-16 ' p-16"
        style={{ backgroundColor: "#FFF5F5" }}
      >
        <h2 className="team-name text-4xl font-semibold text-center">
          Media Team
        </h2>

        <div className="flex flex-col md:flex-row  gap-y-20 justify-center">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={ranji} className="h-72 w-72 " />
            <p className="text-2xl ">Rohan Shrestha</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <img src={bridbalak} className="h-72 w-72 " />
            <p className="text-2xl ">Risav Pyakurel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
