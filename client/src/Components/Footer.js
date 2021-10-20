import React from 'react'
import '../StyleSheets/Footer.css'

const Footer = () => {
  return (
    <div className="FooterContent">
      <div className="FooterSegment">
        <p>
          &copy; Copyright 2021, Loyal Burger Corp.
          |&nbsp;
          <a id="Link-a" href='mailto:rbrionesdev@outlook.com'>
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;