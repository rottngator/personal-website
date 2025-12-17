import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-box">
      <h2 className="nav-title">SITE</h2>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/friends">FRIENDS</a>
        </li>
        <li>
          <a href="/byf_dni">BYF / DNI</a>
        </li>
        <li>
          <a href="/guestbook">GUESTBOOK</a>
        </li>
        <li>
          <a href="/projects">PROJECTS</a>
        </li>
        <li>
          <a href="/sitemap">SITEMAP</a>
        </li>
      </ul>
      <h2 className="nav-title">OFF SITE</h2>
    </div>
  );
};

export default Nav;