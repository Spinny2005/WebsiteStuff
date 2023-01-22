import React from "react";

const Navbar = () => {
  return (
    <div>
      <header>
        <a
          href="https://github.com/Spinny2005"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>spencer boggs</h1>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#about">ABOUT ME</a>
            </li>
            <li>
              <a href="#projects">MY PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
