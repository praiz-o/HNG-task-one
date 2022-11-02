import React from "react";
import "../component/Footer.css";
import zuri from "../component/Pic/zuri.png";
import good from "../component/Pic/good.png";
import hng from "../component/Pic/hng.png";



const Footer = () => (
  <div className="footer">
    <ul>
      <li><img src={zuri}/></li>
      <li><img src={hng}/></li>
      <li><img src={good}/></li>
    </ul>
  </div>
);

export default Footer;
