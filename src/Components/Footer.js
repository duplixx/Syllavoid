import React from "react"
export default function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <h1 className="sylla">
                        Sylla<span className="text-red-600 void">Void</span>
                    </h1>
                    <p className="detail text-justify">
                        This Website is created and designed by team
                        <b>"Hackerjacks"</b>. The main purpose of this website is to make it
                        easy for the students to find the syllabus of different courses of
                        known colleges of India, which helps them to know about whether what
                        is being taught in the college and course they want to take
                        admission in. It will help them to choose the best college and
                        course according to their interest.
                    </p>
                </div>
                <div className="col">
                    <h3>
                        Office
                        <div className="underline"><span></span></div>
                    </h3>
                    <p>XYZ Road</p>
                    <p>ABCDE, Noida</p>
                    <p>Delhi, PIN 231010, India</p>
                    <p class="email">xyz123@gmail.com</p>
                    <h4>+91 - 0123456789</h4>
                </div>
                <div className="col">
                    <h3>
                        Contact
                        <div className="underline"><span></span></div>
                    </h3>
                    <form action="">
                        <i clasNameclassName="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Enter Your Email-id" />
                        <button><i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                    <div class="social">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <a href="feedback.html"
                    ><button className="feedback-btn">Feedback</button></a
                    >
                </div>
            </div>
            <hr />
            <p className="end">
                Made with <i clasNameclassName="fa-solid fa-heart"></i> by team HackerJacks.
            </p>
        </footer>
    )
}