import React, { useRef, useState, useEffect } from "react";
import Background from "../Components/home/background/background";
import About from "../Components/about/about";
import Toggler from "../Components/home/toggler/toggler";
import Drawer from "../Components/home/drawer/drawer";
import Contact from "../Components/contact/contact";
import Footer from "../Components/footer/footer";
import Navbar from "../Components/navbar/navbar";

const scrollToRef = (ref) =>
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

export default function Home() {
  const myRef = useRef(null);
  const myRefContact = useRef(null);

  const executeScroll = () => scrollToRef(myRef);
  const executeScroll2 = () => scrollToRef(myRefContact);

  return (
    <React.Fragment>
      <Toggler />
      <Drawer buttonClick1={executeScroll} buttonClick2={executeScroll2} />
      <Navbar buttonClick1={executeScroll} buttonClick2={executeScroll2} />
      <Background buttonClick={executeScroll} />
      <div ref={myRef}>
        <About />
      </div>
      <div ref={myRefContact}>
        <Contact />
      </div>

      <Footer />
    </React.Fragment>
  );
}
