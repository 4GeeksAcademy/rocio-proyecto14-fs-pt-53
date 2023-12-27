import React from "react"

const Jumbotron = () => {
    return (
    <div className="p-5 mb-4 bg-success bg-opacity-25">
        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold text-danger">FELIZ NAVIDAD</h1>
            <p className="col-md-8 fs-4"> La <strong className="text-danger text-opacity-50">Navidad</strong> es un momento de <strong className="text-danger text-opacity-50">magia, ilusión</strong> y oportunidad de <strong className="text-danger text-opacity-50">estar en familia</strong>. Esta oportunidad debe vivirse y resaltarse como lo prioritario y que los hijos aprendan a vivir la Navidad dando protagonismo a la esencia de la familia, a compartir y vivir momentos y a desarrollar la ilusión de querer compartirlos.</p>
            <button className="btn btn-success btn-lg" type="button">Aprende mas sobre la navidad</button>
        </div>
    </div>
    )
};

export default Jumbotron;
