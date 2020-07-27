import React, { useEffect, useState } from "react";
import "./toggler.css";

export default function Toggler() {
  const [middle, setMiddle] = useState(null);
  const [top, setTop] = useState(null);
  const [bottom, setBottom] = useState(null);

  const listiner = (e) => {
    console.log(window.scrollY, window.innerHeight);
    if (window.scrollY < window.innerHeight - window.innerHeight / 2) {
      setTop(true);
      setBottom(false);
      setMiddle(false);
    } else if (
      window.scrollY > window.innerHeight - window.innerHeight / 2 &&
      window.scrollY < window.innerHeight + window.innerHeight / 2
    ) {
      setMiddle(true);
      setTop(false);
      setBottom(false);
    } else {
      setBottom(true);
      setTop(false);
      setMiddle(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listiner);
  }, []);

  return (
    <React.Fragment>
      <div
        className="circle-red__toggler"
        style={{ backgroundColor: top ? "red" : "grey" }}
      ></div>

      <div
        className="circle-grey__toggler"
        style={{ backgroundColor: middle ? "red" : "grey" }}
      ></div>

      <div
        className="circle-blue__toggler"
        style={{ backgroundColor: bottom ? "red" : "grey" }}
      ></div>
    </React.Fragment>
  );
}
