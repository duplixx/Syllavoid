import React from "react"
export default function Tools() {
    return (
        <div id="tools" className="tools">
            <h2 id="tools-title">Tools Used</h2>
            <section id="themes-section" className="section themes-section">
                <label className="jadu slideanim">
                    <input type="checkbox" />
                    <div className="flip-card">
                        <div className="front">
                            <img
                                src="https://img.icons8.com/color/120/000000/html-5--v1.png"
                            />
                            <h1>HTML:5</h1>
                            <h2>For Structure</h2>
                            <p>Click for more info</p>
                        </div>
                        <div className="back">
                            <h1>More Info</h1>
                            <hr />
                            <p className="">
                                HTML stands for Hyper Text Markup Language. HTML is the standard
                                markup language for creating Web pages.
                            </p>
                            <hr />
                        </div>
                    </div>
                </label>
                <label className="jadu slideanim">
                    <input type="checkbox" />
                    <div className="flip-card">
                        <div className="front">
                            <img src="https://img.icons8.com/color/120/000000/css3.png" />
                            <h1>CSS:3</h1>
                            <h2>For Styling</h2>
                            <p>Click for more info</p>
                        </div>
                        <div className="back">
                            <h1>More Info</h1>
                            <hr />
                            <p>
                                CSS is the language we use to style an HTML document. CSS
                                describes how HTML elements should be displayed.
                            </p>
                            <hr />
                        </div>
                    </div>
                </label>
                <label className="jadu slideanim">
                    <input type="checkbox" />
                    <div className="flip-card">
                        <div className="front">
                            <img
                                src="https://img.icons8.com/color/120/000000/javascript--v1.png"
                            />
                            <h1>JAVASCRIPT</h1>
                            <h2>For Functionality</h2>
                            <p>Click for more info</p>
                        </div>
                        <div className="back">
                            <h1>More Info</h1>
                            <hr />
                            <p>
                                JavaScript is the world's most popular programming language.
                                JavaScript is the programming language of the Web.
                            </p>
                            <hr />
                        </div>
                    </div>
                </label>
                <label className="jadu slideanim">
                    <input type="checkbox" />
                    <div className="flip-card">
                        <div className="front">
                            <img
                                src="https://hight.io/_nuxt/img/tailwind.3558838.png"
                                alt=""
                            />
                            <h1>TAILWIND CSS</h1>
                            <h2>For CSS Framework</h2>
                            <p>Click for more info</p>
                        </div>
                        <div className="back">
                            <h1>More Info</h1>
                            <hr />
                            <p>
                                Tailwind CSS is basically a utility-first CSS framework for
                                rapidly building custom user interfaces.
                            </p>
                            <hr />
                        </div>
                    </div>
                </label>
            </section>
        </div>
    )
}