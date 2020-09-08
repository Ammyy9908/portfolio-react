import React from 'react'
import '../Navbar.css'
function Navbar() {
    return (
        <div>
            <div className="navbar is-black is-fixed-top">
            <div className="navbar-brand">
            <a className="navbar-item" href="">
            <strong>Sumit Kumar</strong>
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item is-active" href="#home">
        Home
      </a>

      <a class="navbar-item" href="#about">
        About
      </a>
      <a class="navbar-item" href="#resume">
        Resume
      </a>
      <a class="navbar-item" href="#contact">
        Contact
      </a>
    </div>
  </div>
            </div>
        </div>
    )
}

export default Navbar
