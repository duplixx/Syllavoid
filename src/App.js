import React from "react"
import Navbar from "./Components/Navbar"
import Preloader from "./Components/Preloader"
import Search from "./Components/Search"
import Motive from "./Components/Motive"
import Team from "./Components/Team"
import Tools from "./Components/Tools"
import Footer from "./Components/Footer"
import Particle from "./Components/Particle"
import "./typewriter.js"
// import "./search.js"

export default function App() {
  var loader = document.getElementById("preloader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });
  function rerevealSide() {
    var rerevealsSide = document.querySelectorAll(".rerevealSide");

    for (var i = 0; i < rerevealsSide.length; i++) {
      var windowHeight = window.innerHeight;
      var elementleft = rerevealsSide[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementleft < windowHeight - elementVisible) {
        rerevealsSide[i].classList.add("active");
      } else {
        rerevealsSide[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", rerevealSide);
  function revealSide() {
    var revealsSide = document.querySelectorAll(".revealSide");

    for (var i = 0; i < revealsSide.length; i++) {
      var windowHeight = window.innerHeight;
      var elementRight = revealsSide[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementRight < windowHeight - elementVisible) {
        revealsSide[i].classList.add("active");
      } else {
        revealsSide[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", revealSide);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 350;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  return (
    <>
      {/* <Preloader /> */}
      <Particle />
      <Navbar />
      <Search />
      <Motive />
      <Team />
      <Tools />
      <Footer />
    </>
  )
}