import React from "react"
export default function Sign_In(props) {
    return (
        <div className={props.show === true?"sign-in active":"sign-in"} id="modal">
            <div className="header">
                <h1>Welcome</h1>
                <button id="closed" className="close-button" onClick={props.onClick} >&times;</button>
            </div>
            <form>
                <input type="email" className="input" placeholder="Enter your Email-Id" />
                <input
                    type="password"
                    className="input"
                    placeholder="Enter your Password"
                />
            </form>
            <p className="remem">
                <span><input type="checkbox" /></span> Remember Me
            </p>
            <button className="btn1">LOGIN</button>
            <p className="forgot">Forgot Password?</p>
            <hr />
            <p className="or">OR</p>
            <p>Need an account ? <a href="signup.html">SIGN UP</a></p>
        </div>
    )
}