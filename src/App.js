import React from "react"
import Preloader from "./Components/Preloader";
import HomePage from "./pages/home";
import PdfViewer from "./Components/college/pdfviewer";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

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
  
  window.addEventListener("scroll", reveal);
  const [loading, setLoading] = React.useState(false)
  React.useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  
  return (
    <>
    {loading ? 
       <Preloader /> :
      <BrowserRouter>
        <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route exact path="/pdfviewer" element={<PdfViewer />} />
        </Routes>
      </BrowserRouter>
    }
    </>
  )
}