import React from "react";
import img from "../component/Pic/hero.jpg";
import "../component/Profile.css";
import ic from "../component/Pic/ic.png";
import slack from "../component/Pic/slack.png";
import icon from "../component/Pic/Icon.png";
import Footer from "./Footer";


export default function Profile() {
  return (
    <>
      <section className="profile" id="">
        <div className="profile-container">
          <div className="top">
            <ul>
              <img src={icon} />
              </ul>
          
            <img className="profile_img" src={img} alt="" />
            <h3>Praise Princewill</h3>
            <a className="slack" href="" />

          </div>

          <div className="button-container">
            <a href="https://twitter.com/PraisePrincewi1" id="twitter">
              <button className="btn_shadow">Twitter Link</button>
            </a>
            <a href="https://training.zuri.team/" id="btn__zuri">
              <button className="btn_shadow">Zuri Team</button>
            </a>
            <a href="http://books.zuri.team" id="books">
              <button className="btn_shadow">Zuri Books</button>
            </a>
            <a href="https://books.zuri.team/" id="book-python">
              <button className="btn_shadow">Python Books</button>
            </a>
            <a href="https://background.zuri.team" id="pitch">
              <button className="btn_shadow">
                Background Check for Coders
              </button>
            </a>
            <a href="https://books.zuri.team/design-rules" id="book__design">
              <button className="btn_shadow">Design Books</button>
            </a>

            <div className="social-link">
              <ul>
                <li><img src={ic} alt= ""/></li>
                <li><img src={slack} alt= "" /></li>
                
              </ul>
          </div>
            </div>
           
        </div>
        
      </section>
    </>
  );
}
