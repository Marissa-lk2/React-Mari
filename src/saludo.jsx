import React from 'react';
import ReactDOM from 'react-dom/client';

function SaludarPersona(props) {
  return <h1>Un gusto volverte a ver, {props.name} {props.lastName}!</h1>;
}

function App() {
  return <SaludarPersona name="Maria" lastName="Isaza" />;
}

export default SaludarPersona;

