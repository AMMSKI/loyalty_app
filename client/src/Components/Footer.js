import React from 'react'
import '../StyleSheets/Footer.css'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar bg="black" style={{ padding: '15px', display: "flex", justifyContent: "center", height: "70px"}} className="FooterContent">
      <div className="FooterSegment WhiteFontC">
        <p>
          &copy; Copyright 2021, Loyal Burger Corp.
          |&nbsp;
          <a className="AmaranthRedFontC" href='/about'>
            About Us
          </a>
        </p>
      </div>
    </Navbar>
  );
};

export default Footer;