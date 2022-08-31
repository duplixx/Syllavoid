import React from "react"

export default function Navbar(props) {
    return (
        <nav>
            <h1 className="sylla">Sylla<span class="text-red-600 void">Void</span></h1>
            <img
                src="https://img.icons8.com/ios-filled/50/ffffff/menu--v4.png"
                id="burger"
            />
            <div className="main-nav">
                <ul className="hidden span-1 flex md:grid nav-content" id="menu">
                    <li>
                        <a className="navbar" href="#motive">Motive</a>
                    </li>
                    <li>
                        <a className="navbar" href="#teams">Team</a>
                    </li>
                    <li>
                        <a className="navbar" href="#tools">Tools</a>
                    </li>
                    <li>
                        <button className="signin_btn navbar" id="open" onClick={props.onClick} >SignIn</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}