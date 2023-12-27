import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand text-light" href="#"><i className="fa-solid fa-holly-berry p-1"></i>Navidad</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-light" href="#">About</a>
                        <a className="nav-link text-light" href="#">Services</a>
                        <a className="nav-link disabled text-light">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
