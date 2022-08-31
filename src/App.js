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
import Sign_In from "./Components/Sign_In"
// import "./search.js"

export default function App() {
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
  const [show, setShow] = React.useState(false)
  window.addEventListener("scroll", reveal);
  const [loading, setLoading] = React.useState(false)
  React.useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  const handleChange = (e) =>{
    if(show===false){
      setShow(true)
    }
    else{
      setShow(false)
    }
      
  }
  return (
    <>
    {loading ? 
       <Preloader /> :
      <>
      <Particle />
      <Navbar onClick = {handleChange} />
      <Search />
      <Motive />
      <Team />
      <Tools />
      <Footer />
      <Sign_In show = {show} onClick={handleChange} /> 
      </>
    }
    </>
  )
}