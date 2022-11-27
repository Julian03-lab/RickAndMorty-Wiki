import React from "react";
import logo from "./images/Rick_And_Morty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const iconStyle = "text-3xl lg:text-4xl text-white hover:text-gray-300";

  return (
    <div className="flex flex-col gap-7">
      <img
        src={logo}
        alt="rick and morty wiki logo"
        className="lg:w-2/3 self-center"
      />
      <nav className="flex flex-col lg:flex-row gap-3 items-center justify-evenly">
        <a
          href="https://github.com/Julian03-lab/RickAndMorty-Wiki"
          className="text-2xl lg:text-3xl font-bold text-white hover:text-zinc-800"
          target="_blank"
        >
          GitHub Repository
        </a>
        <ul className="flex gap-5">
          <li className={iconStyle}>
            <a href="https://github.com/Julian03-lab" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a> 
          </li>
          <li className={iconStyle}>
            <a href="https://www.linkedin.com/in/julian-fontana-391a90206/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className={iconStyle}>
            <a href="https://julian-fontana.me" target="_blank">
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(Header);
