import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="header">
        <div className="topBar">
            <Link to="/">
            <button type="button">
                <img src="/home.png" alt="User Info" height={45} />
            </button>
            </Link>
        </div>    

        <div className="logo">
            <Logo />
        </div>

        <div className="topBar">
            <div className="backpack">
            <Link to="/backpack">
            <button type="button">
                <img src="/backpack.png" alt="Backpack" height={45}/>
            </button>
            </Link>
            </div>
        </div>
        </div>
        
    );
}

export default Header;
