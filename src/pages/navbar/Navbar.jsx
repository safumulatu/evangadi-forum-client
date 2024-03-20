import React from 'react';
import './navbar.css'
function Navbar() {
  return (
    <div>
      <div className="inn-5ox container-d3t d-4k3 content-5ck">
        <a href="/">
          <img
            src="path_to_your_image_here"
            alt="Evangadi Networks Logo"
          />
        </a>
        <button className="ivsnk block-ovk d-md-1ln">
          ☰
        </button>
        <div className="d-4k3 inn-xwv content-sq4 d-vdn block-5yz">
          <a href="/">Home</a>
          <a href="/">How it Works</a>
          <button className="header-l9y">SIGN IN</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
