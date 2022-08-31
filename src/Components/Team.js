import React from "react"
export default function Team() {
    return (
        <section className="team-cont" id="teams">
            <div className="team">
                    <h2 className="team-head">Our Team</h2>
                    <div className="mem mem-1 rerevealSide">
                        <div className="image-cont-left">
                            <img
                                src="https://origin-staticv2.sonyliv.com/UI_icons/Multiprofile/profile-07.png"
                                alt="p-png"
                                className="pf-png pf-png1"
                            />
                        </div>
                        <div>
                            <h3 className="name">Shekhar Patel</h3>
                            <hr className="timeline-connection" />
                            <hr className="timeline-connection2" />
                        </div>
                        <p className="team-text">
                            B.Tech (CSE) <br />
                            Web Programming
                        </p>
                    </div>
                    <div className="mem mem-2 revealSide">
                        <div className="image-cont-right">
                            <img
                                src="https://origin-staticv2.sonyliv.com/UI_icons/Multiprofile/profile-07.png"
                                alt="p-png"
                                className="pf-png pf-png2"
                            />
                        </div>
                        <div>
                            <h3 className="name">Sankalp Srivastava</h3>
                            <hr className="timeline-connection" />
                            <hr className="timeline-connection3" />
                        </div>
                        <p className="team-text">
                            B.Tech (CSE) <br />
                            Web Designing
                        </p>
                    </div>
                    <div className="mem mem-1 mem-3 rerevealSide">
                        <div className="image-cont-left">
                            <img
                                src="https://origin-staticv2.sonyliv.com/UI_icons/Multiprofile/profile-07.png"
                                alt="p-png"
                                className="pf-png pf-png1"
                            />
                        </div>
                        <div>
                            <h3 className="name">Mihir Aman Raj</h3>
                            <hr className="timeline-connection" />
                            <hr className="timeline-connection2" />
                        </div>
                        <p className="team-text">
                            B.Tech (CSE AI) <br />
                            Web Designing
                        </p>
                    </div>
                    <div className="mem mem-2 mem-4 revealSide">
                        <div className="image-cont-right">
                            <img
                                src="https://origin-staticv2.sonyliv.com/UI_icons/Multiprofile/profile-07.png"
                                alt="p-png"
                                className="pf-png pf-png2"
                            />
                        </div>
                        <div>
                            <h3 className="name">Vivek Singh</h3>
                            <hr className="timeline-connection" />
                            <hr className="timeline-connection3" />
                        </div>
                        <p className="team-text">
                            B.Tech (CSE) <br />
                            Content Editor
                        </p>
                    </div>
            </div>
        </section>
    )
}