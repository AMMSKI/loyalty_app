import React from 'react'
import '../StyleSheets/Footer.css'

const Footer = () => {
  return (
    <div className="FooterContent">
      <div className="FooterSegment WhiteFontC">
        <p>
          &copy; Copyright 2021, Loyal Burger Corp.
          |&nbsp;
          <a className="AmaranthRedFontC" href='/about'>
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;