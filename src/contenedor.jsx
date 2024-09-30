import React from 'react';
import ReactDOM from 'react-dom/client';

const Contenedor = ({ children }) => {
    return (
        <div style={{
             border: '2px solid black', 
             padding: '20px',
              borderRadius: '5px', 
              margin:'20px',
              backgroundColor: '#ffe5f0',
              color: 'black' }}>
            {children}
        </div>
    );
}; 

export default Contenedor;
