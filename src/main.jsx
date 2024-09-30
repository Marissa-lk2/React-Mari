import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SaludarPersona from './saludo.jsx';
import SaludarIdioma from './idioma.jsx';
import Contenedor from './contenedor.jsx';
import Contador from './contador.jsx';

const App = () => {
    return (
        <div>
          <Contenedor>
                <SaludarPersona name="Maria" lastName="Isaza" idioma=""></SaludarPersona>
                <SaludarIdioma nombre="John" idioma="en" />
                <SaludarIdioma nombre="Pierre" idioma="fr" />
                <SaludarIdioma nombre="Lee Minho" idioma="kr" />
            </Contenedor>
            <Contador />
        </div>
    );
};



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
