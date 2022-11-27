import React from "react";
import logo from "./images/Rick_And_Morty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex flex-col gap-7">
      <img src={logo} alt="rick and morty wiki logo" className="w-2/3 self-center"/>
      <nav className="flex items-center justify-evenly">
      <a href="https://www.freepik.com/vectors/background" className="text-3xl font-semibold text-white hover:text-zinc-800">
          GitHub Repository
        </a>
        <ul className="flex gap-5">
          <li className="text-4xl text-white hover:text-zinc-800">
            <a href="">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="text-4xl text-white hover:text-zinc-800">
            <a href="">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="text-4xl text-white hover:text-zinc-800">
            <a href="">
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          </li>
        </ul>
        
      </nav>
    </div>
  );
};

export default Header;
