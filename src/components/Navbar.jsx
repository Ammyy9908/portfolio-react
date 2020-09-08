import React from 'react'
import '../Navbar.css'
function Navbar() {
    return (
        <div>
            <div className="navbar is-black is-fixed-top">
            <div className="navbar-brand">
            <a className="navbar-item" href="#/">
            <strong>Sumit Kumar</strong>
            </a>

            <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </div>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item is-active" href="#home">
        Home
      </a>

      <a className="navbar-item" href="#about">
        About
      </a>
      <a className="navbar-item" href="#resume">
        Resume
      </a>
      <a className="navbar-item" href="#contact">
        Contact
      </a>
    </div>
  </div>
            </div>
        </div>
    )
}

export default Navbar
