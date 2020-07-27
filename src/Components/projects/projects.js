import React from "react";
import "./projects.css";
import hopzoneImage from "../../assets/hopzone.svg";
import lifeloomImage from "../../assets/lifeloom.svg";
import rsImage from "../../assets/rs.png";
import openTag from "../../assets/otvorentag.svg";
import { useHistory } from "react-router-dom";

export default function Projects() {
  const history = useHistory();
  return (
    <React.Fragment>
      <button
        className="back__button__projects"
        onClick={() => {
          history.push("/");
          window.scrollTo(0, 0);
        }}
      >
        <img src={openTag} width={50} height={50}></img>
      </button>

      <div className="background__projects">
        <div className="testimonials">
          <div className="card">
            <div className="layer"></div>
            <div className="content">
              <p>
                HopZone is a simple way for photographers to log, capture, and
                share the world’s most astonishing photographic locations.
              </p>
              <img
                src={hopzoneImage}
                width={150}
                height={150}
                className="image"
              ></img>
              <div clasName="details">
                <h2>
                  <button
                    className="button__projects"
                    onClick={() => {
                      window.open(
                        "https://github.com/NIT-PMF/hopZone",
                        "_balnk"
                      );
                    }}
                  >
                    GitHuB
                  </button>
                  <br />
                  <button
                    className="button__projects"
                    onClick={() => {
                      window.open(
                        "https://www.youtube.com/watch?v=j73pLy-OVfg&feature=youtu.be",
                        "_balnk"
                      );
                    }}
                  >
                    Youtube
                  </button>
                </h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div class="layer"></div>
            <div class="content">
              <p>
                it is difficult to form a habit in one day. Lifeloom is an
                android application which makes it easier to form a good habit.
              </p>
              <img
                src={lifeloomImage}
                width={150}
                height={150}
                className="image"
              ></img>
              <div className="details">
                <h2>
                  <button
                    className="button__projects"
                    onClick={() => {
                      window.open(
                        "https://github.com/NIT-PMF/lifeloom",
                        "_balnk"
                      );
                    }}
                  >
                    GitHuB
                  </button>
                  <br />
                  <button
                    className="button__projects"
                    onClick={() => {
                      window.open(
                        "https://hackmd.io/@Namespace/BJArQ8lyw",
                        "_balnk"
                      );
                    }}
                  >
                    Documentation
                  </button>
                </h2>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="layer"></div>
            <div class="content">
              <p>
                Rs-simulator is a web application which students to better
                understand logic gates
              </p>
              <img
                src={rsImage}
                width={150}
                height={150}
                className="image"
              ></img>
              <div class="details">
                <h2>
                  <button
                    className="button__projects"
                    onClick={() => {
                      window.open(
                        "https://github.com/tarik11/Rs-simulator",
                        "_balnk"
                      );
                    }}
                  >
                    GitHuB
                  </button>
                  <br />
                  <button
                    className="button__projects"
                    onClick={() => {
                      window.open(
                        "https://hackmd.io/@sc2iDxH8SA20T6C57TrN5w/H13vPKDyP",
                        "_balnk"
                      );
                    }}
                  >
                    Documentation
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
