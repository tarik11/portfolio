import React from "react";
import "./background.css";
import { Button } from "@material-ui/core";
import openTag from "../../../assets/otvorentag.svg";
import closeTag from "../../../assets/zatvorenitag.svg";
import Typical from "react-typical";

export default function Background(props) {
  return (
    <React.Fragment>
      <div className="stars"></div>
      <div className="clouds"></div>
      <div className="background"></div>
      <div className="center-all__background">
        <div className="text-button__background">
          <div className="text__background">
            <img src={openTag} className="image__background"></img>
            <div style={{ color: "white" }}>
              <p
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "25px",
                }}
              >
                Hi, &nbsp;&nbsp;I`m Tarik Selimovic <br />
              </p>
              <div className="text__typical__background">
                I`m a &nbsp;
                <Typical
                  steps={[
                    "Footballer",
                    1000,
                    "Developer",
                    1000,
                    "Desinger",
                    1500,
                  ]}
                  loop={Infinity}
                  wrapper="b"
                />
              </div>
            </div>
            <img src={closeTag} className="image__background"></img>
          </div>
          <div className="button__background">
            <Button
              variant="contained"
              color="primary"
              onClick={props.buttonClick}
            >
              Discover more
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
