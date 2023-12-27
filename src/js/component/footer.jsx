import React from "react";


const Footer = () => {
    return (
        <footer className="bg-dark text-center mt-2">
            <div className="row">
                
                <span className="mb-3 mb-md-0 text-muted"><i className="fa-brands fa-bootstrap"></i>© 2022 Company, Inc</span>
                <div className="col-lg-12 d-flex justify-content-center">
                    <a href="#" className="link-light m-3"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" className="link-light m-3"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="link-light m-3"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#" className="link-light m-3"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer