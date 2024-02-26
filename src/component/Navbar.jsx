import plstc from "../img/assets/Plstc-logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuItemClick = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="navbar is-black is-fixed-top">
      <div className="navbar-brand logo-mq ml-5">
        <a className="navbar-item py-0 px-0" href="/#" onClick={handleMenuItemClick}>
          <img
            src={plstc}
            alt="plstc"
            className="image is-64x64 object-fit-cover"
          />
        </a>
      </div>

      <a
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className={`navbar-burger burger-mq mr-5 ${
          isSidebarOpen ? "is-active" : ""
        }`}
        href="/#"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>

      <div
        className={`navbar-menu mr-5 has-text-weight-bold menu-mq ${
          isSidebarOpen ? "menu-mq-hidden" : ""
        }`}
        id="nav-links"
      >
        <div className="navbar-end item-container-mq">
          <a className="navbar-item item-mq" href="/#" onClick={handleMenuItemClick}>
            HOME
          </a>
          <a
            className="navbar-item item-mq"
            href="/#stats"
            onClick={handleMenuItemClick}
          >
            STATS
          </a>
          <a
            className="navbar-item item-mq"
            href="/#event"
            onClick={handleMenuItemClick}
          >
            EVENT
          </a>
          <a
            className="navbar-item item-mq"
            href="/#team"
            onClick={handleMenuItemClick}
          >
            TEAM
          </a>

          <div className="flex-login">
            <a className="button login" href="https://admin.plasticque.id/" target="_blank" rel="noreferrer">
              <strong>LOGIN</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
