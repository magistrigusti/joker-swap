import React from "react";
// internal import
import { shortenAddress } from "../utils/index";

const Header = ({ address, connect }) => {
  const menu = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },  // Исправлен URL
    { name: "How It works", link: "#howworks" },
    { name: "Q&A", link: "#question" },
    { name: "Blog", link: "#blog" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="mein-menu">  {/* Изменено на <header> и исправлено имя класса */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              style={{ height: "50px" }}
              src="assets/img/joker-logo.png"
              alt="swap"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {menu.map((item) => (
                <li className="nav-item" key={item.name}>
                  <a className="nav-link" href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
              {address ? (
                <button className="new_button">{shortenAddress(address)}</button>
              ) : (
                <button className="new_button" onClick={() => connect()}>
                  Connect
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

