import React from "react";
import Card from './card';

const Cards = () => {
    const persons = [
        {
            img:'https://cdn.pixabay.com/photo/2022/12/25/18/38/xmas-7677696_1280.jpg',
            name: 'Familia',
            description: 'No es necesario hacer planes muy especiales, simplemente se trata de estar juntos sin obligaciones, prisas o responsabilidades. Se para el reloj para estar con tus seres queridos y darles la máxima atención, afecto y cariño'
        },
        {
            img:'https://cdn.pixabay.com/photo/2019/11/26/15/25/nougat-4654759_1280.jpg',
            name: 'Dulces',
            description: 'Los dulces navideños no solo son delicias para el paladar, sino que también desempeñan un papel simbólico. Muchos de ellos representan la generosidad, la prosperidad y la esperanza, convirtiéndose en elementos fundamentales de rituales y tradiciones que se transmiten de generación en generación.'
        },
        {
            img:'https://img.freepik.com/fotos-premium/hoja-vieja-notas-musicales-navidad-como-fondo-contra-luces-borrosas-concepto-musica-navidena_494741-887.jpg?w=900',
            name: 'Tradiciones',
            description: 'Es una costumbre general que las familias canten villancicos, canciones típicas de Navidad, toquen instrumentos navideños como panderetas, zambombas y que se alargue la fiesta hasta altas horas de la madrugada.'
        },
        {
            img:'https://cdn.pixabay.com/photo/2019/12/06/19/06/gifts-4678018_1280.jpg',
            name: 'Regalos',
            description: 'Más allá de la materialidad y la historia, el intercambio de regalos en Navidad refleja valores de amor, amistad, solidaridad y generosidad. Es una oportunidad para reforzar lazos emocionales, compartir momentos especiales y transmitir afecto a quienes amamos.'
        }
    ]
    return (
        <div className= "row row-cols-1 row-cols-sm-4 g-3">
            {
                persons.map((item, index) => {
                    return (
                        <Card key={index} img={item.img} name={item.name} description={item.description} />
                    )
                })
            }
        </div>
    )
};

export default Cards;