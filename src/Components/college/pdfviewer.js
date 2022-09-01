import React from 'react'

export default function PdfViewer(...props) {
  return (
<div>
  <div id="system">
    <div id="sun" className="star" />
    <div id="mercury" className="planet" />
    <div id="venus" className="planet" />
    <div id="earth" className="planet" />
    <div id="mars" className="planet" />
    <div id="asteroidBelt" className="belt" />
    <div id="jupiter" className="planet" />
    <div id="saturn" className="planet" />
    <div id="uranus" className="planet" />
    <div id="neptune" className="planet" />
    <div id="kuiperBelt" className="belt" />
  </div>
  <div className="flex justify-end fixed w-[100%]">
    <a href="../../index.html" id="home___" target="" className="m-5">
      <button>
        {" "}
        <i className="fa-solid fa-house" /> Back To Home
      </button>
    </a>
  </div>
  <h1 className="sylla">
    Sylla<span className="void">Void</span>
  </h1>
  <div className="text-center text-white text-3xl mb-5">
    <h1 id="heading" className="font-bold" ></h1>
  </div>
  <center>
    <hr className="w-[60%] mb-10" />
  </center>
  <center>
    <canvas id="pdfrender" />
  </center>
  <center>
    <button className="btn" id="prev-page">
      <i className="fa-solid fa-arrow-left" />
    </button>
    <button className="btn" id="next-page">
      <i className="fa-solid fa-arrow-right" />
    </button>
    <span className="text-white">
      Page <span id="page-num" /> of <span id="page-count" />
    </span>
  </center>
  <footer>
    <div className="row">
      <div className="col">
        <h1 className="sylla ml-0 mb-5">
          Sylla<span className="text-red-600 void">Void</span>
        </h1>
        <p className="detail">
          This Website is created and designed by team
          <b>"Hackerjacks"</b>. The main purpose of this website is to make it
          easy for the students to find the syllabus of different courses of
          known colleges of India, which helps them to know about whether what
          is being taught in the college and course they want to take admission
          in. It will help them to choose the best college and course according
          to their interest.
        </p>
      </div>
      <div className="col">
        <h3>
          Office
          <div className="underline">
            <span />
          </div>
        </h3>
        <p>XYZ Road</p>
        <p>ABCDE, Noida</p>
        <p>Delhi, PIN 231010, India</p>
        <p className="email">xyz123@gmail.com</p>
        <h4>+91 - 0123456789</h4>
      </div>
      <div className="col">
        <h3>
          Contact
          <div className="underline">
            <span />
          </div>
        </h3>
        <form action="">
          <i className="fa-solid fa-envelope" />
          <input type="email" placeholder="Enter Your Email-id" />
          <button>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </form>
        <div className="social">
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-instagram" />
        </div>
        <a href="../feedback.html">
          <button className="feedback-btn">Feedback</button>
        </a>
      </div>
    </div>
    <hr />
    <p className="end">
      Made with <i className="fa-solid fa-heart" /> by team HackerJacks.
    </p>
  </footer>
</div>
  )
}
