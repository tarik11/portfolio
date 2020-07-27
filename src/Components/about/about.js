import React from "react";
import "./about.css";
import openTag from "../../assets/otvorentag.svg";
import closeTag from "../../assets/zatvorenitag.svg";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
export default function About(props) {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="background__about">
        <div className="card__background___about"></div>
      </div>
      <div className="main__about">
        <div className="text-button__background">
          <div className="text__background">
            <img src={openTag} className="image__about"></img>
            <div style={{ color: "white" }}>
              <p className="p__about">
                My name is Tarik Selimovic. I`m currently studying <br />{" "}
                computer science in Faculty of Natural <br />
                Science and Mathematics. I`am a web designer,
                <br /> front end and back end developer from Sarajevo.
                <br /> Always on the look out for exciting projects to work on.{" "}
                <br />
              </p>
            </div>
            <img src={closeTag} className="image__about"></img>
            <div className="git__text__pic__about"></div>
          </div>
          <div className="button__background">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                history.push("/projects");
                window.scrollTo(0, 0);
              }}
            >
              See my projects
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
