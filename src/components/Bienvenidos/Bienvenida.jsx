import React from 'react';

function Bienvenida() {
  const textStyle = {
    color: '#f0c84f', 
    textShadow: '2px 2px 4px rgba(2, 2, 2, 1)',
    fontFamily: 'fantasy',
    fontWeight: '900'
  };

  const paragraphStyle = {
    color: 'white',
    fontFamily: '"Segoe UI", sans-serif'
  };

  const linkStyle = {
    color: '#A2825C',
    fontFamily: '"Segoe UI", sans-serif'
  };

  const lineStyle = {
    borderTop: '2px solid white',
    margin: '10px 0'
  };

  return (
    <div className="container" style={{ backgroundColor: '#000000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="alert-container text-center">
        <h1 style={textStyle}>¡Hola, Bienvenido(a)!</h1>
        <div style={lineStyle}></div>
        <div>
          <p style={paragraphStyle}>
            A mi portafolio, donde canalizo mi pasión por uno de los juegos clásicos más emblemáticos de todos los tiempos.
            <br/>
            Mi objetivo es reflejar mi dedicación y amor por la programación.
            <br/>
            No dudes en ponerte en contacto conmigo si tienes alguna pregunta o sugerencia.
            <br/>
            ¡Gracias por visitar mi sitio web y espero que disfrutes explorando mi trabajo!
          </p>
          <a style={linkStyle} href="./Informacion">Visualizar Portafolio</a>
        </div>
        <div style={lineStyle}></div>
      </div>
    </div>
  );
}

export default Bienvenida;
