/* eslint-disable react/jsx-key */
import {
  FaCaretDown,
  FaEnvelope,
  FaLanguage,
  FaMandalorian,
} from "react-icons/fa";
import "../styles/navigation.css";
import Sugwheel from "./sugwheel";
import { useNavigate } from "react-router-dom";
import { navConfig } from "../config/nav.config";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Navigation({ setDotmapConfig }) {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [activeRoute, setActiveRoute] = useState(0);

  return (
    <div className="w-full absolute h-full top-0 flex justify-between z-30 pointer-events-none">
      <div className="pointer-events-auto shadow-xl text-3xl h-20 font-semibold font-sans flex justify-center items-center w-[210px] p-12 px-10 pr-16 bg-white text-[#474a75] rounded-br-full">
        <FaMandalorian fill="#474a75" fontSize={60} />
      </div>

      <div className="pointer-events-auto shadow-lg h-20 w-fit no-scrollbar overflow-auto bg-[#2c3059] bg-opacity-50 justify-between flex flex-row px-5 items-center rounded-3xl inset-5 backdrop-blur-md m-[20px]">
        {navConfig.map((i) => (
          <div
            onClick={() => {
              setActiveRoute(i[0]);
              setDotmapConfig([i[0], i[4]]);
              navigate(i[3]);
            }}
            key={i[0]}
            className="h-[80%] rounded-lg flex items-center uppercase whitespace-nowrap font-mono font-bold hover:bg-slate-900 hover:bg-opacity-20 text-white transition px-4 duration-300 hover:cursor-pointer"
          >
            <span className="inline-block mr-2">
              {i[2]}
              {i[1]}
            </span>
          </div>
        ))}
      </div>

      <div className="pointer-events-auto shadow-lg w-[190px] no-scrollbar overflow-auto h-20 bg-[#2c3059] bg-opacity-50 justify-between flex flex-row px-5 items-center rounded-3xl inset-5 backdrop-blur-md m-[20px]">
        {[
          [
            0,
            <FaEnvelope className="inline-block mr-2" fontSize={20} />,
            "/home",
          ],
          [
            1,
            <FaLanguage className="inline-block mr-2" fontSize={40} />,
            "/about",
          ],
        ].map((i) => (
          <div
            key={i[0]}
            className="h-[80%] rounded-lg flex items-center uppercase whitespace-nowrap font-mono font-bold hover:bg-slate-900 hover:bg-opacity-20 text-white glow-on-hover transition pl-4 duration-300 hover:cursor-pointer"
          >
            <span className="mr-2 flex flex-row items-center">
              {i[1]}
              <FaCaretDown />
            </span>
          </div>
        ))}
      </div>

      <Sugwheel />
    </div>
  );
}

export default Navigation;
