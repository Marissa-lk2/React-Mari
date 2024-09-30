
import React from 'react';
import ReactDOM from 'react-dom/client';

const SaludarIdioma = ({ nombre, idioma }) => {
    let saludo;

    switch (idioma) {

        case 'en':
            saludo = `Nice to see you again, ${nombre}!`;
            break;
        case 'fr':
            saludo = `Enchanté de te revoir, ${nombre}!`;
            break;
        case 'kr':
            saludo = `다시 만나서 반가워요, ${nombre}!`; 
            break;
        default:
            saludo = `Un gusto volverte a ver, ${nombre}!`; 
    }

    return <h1>{saludo}</h1>;
};

export default SaludarIdioma;
