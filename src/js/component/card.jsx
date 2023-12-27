import React from "react";


const Card = (props) => {
    const { img, name, description } = props;
    return (
        <div className="col">
                <div class="card  h-100 text-center">
                    <img src={img} className="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>

                    </div>
                    <div class="card-footer bg-danger bg-opacity-25">
                        <a href="#" class="btn btn-success">Mas sobre <strong>{name}</strong></a>
                    </div>
                </div>
            
        </div>
    )
};



export default Card;