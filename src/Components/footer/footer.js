import React from "react";
import "./footer.css";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import git from "../../assets/git.svg";
import linkedin from "../../assets/linkedin.svg";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="background__footer">
        <div className="center__item__footer">
          <div className="line__between__footer"></div>
          <div className="icons__footer">
            <div className="center__icons__footer"></div>
            <button
              className="scale__button__footer"
              onClick={() => {
                window.open(
                  "https://www.facebook.com/tarik.selmovic.5",
                  "_blank"
                );
              }}
            >
              <img src={facebook} className="icon_img__footer"></img>
            </button>
            <button
              className="scale__button__footer"
              onClick={() => {
                window.open("https://github.com/tarik11", "_blank");
              }}
            >
              {" "}
              <img src={git} className="icon_img__footer"></img>
            </button>

            <button
              className="scale__button__footer"
              onClick={() => {
                window.open("https://twitter.com/SelimovicTarik", "_blank");
              }}
            >
              <img src={twitter} className="icon_img__footer"></img>
            </button>
            <button
              className="scale__button__footer"
              onClick={() => {
                window.open(
                  "https://linkedin.com/in/tarik-selimovic-7bb3b9198/",
                  "_balnk"
                );
              }}
            >
              <img src={linkedin} className="icon_img__footer"></img>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
