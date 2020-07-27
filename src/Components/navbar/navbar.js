import React from "react";
import gitBlack from "../../assets/gitBlack.svg";
import "./navbar.css";

export default function navbar(props) {
  return (
    <React.Fragment>
      <div className="inline__navbar">
        <div className="button__navbar">
          <button style={{ color: "white" }} onClick={props.buttonClick1}>
            About
          </button>
          <button style={{ color: "white" }} onClick={props.buttonClick2}>
            Contact
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/tarik11", "_blank");
            }}
          >
            {" "}
            <img src={gitBlack} className="git__black__navbar"></img>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
