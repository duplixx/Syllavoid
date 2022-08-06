import React from "react"

export default function Navbar() {
    return (
        <nav>
            <h1 class="sylla">Sylla<span class="text-red-600 void">Void</span></h1>
            <img
                src="https://img.icons8.com/ios-filled/50/ffffff/menu--v4.png"
                id="burger"
            />
            <div class="main-nav">
                <ul class="hidden span-1 flex md:grid nav-content" id="menu">
                    <li>
                        <a class="navbar" href="#motive">Motive</a>
                    </li>
                    <li>
                        <a class="navbar" href="#teams">Team</a>
                    </li>
                    <li>
                        <a class="navbar" href="#tools">Tools</a>
                    </li>
                    <li>
                        <button class="signin_btn navbar" id="open">SignIn</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}