import React, { useState } from 'react';
import './styles.css';
import './css.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Inicio() {
  const [mostrarSpinner, setMostrarSpinner] = useState(false);

  const iniciarProgreso = (event) => {
    event.preventDefault();
    setMostrarSpinner(true);

    // Simular una carga antes de redireccionar
    setTimeout(() => {
      window.location.href = './Bienvenida';
    }, 1500); // Ejemplo de espera de 1.5 segundos antes de redireccionar
  };

  return (
    <div id="navbar-principal" className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div>
        <nav id="navbar-segundario" className="navbar navbar">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <div className="navbar-brand text-white" style={{ fontSize: '28px' }}>Full Stack Developer</div>
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
              <p className="mb-0 text-center text-white"></p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/jaravenae/" className="btn btn-dark" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <p id="minombre" className="mb-0 me-2 text-white p-2">Janis</p>
              <div className="contenedor-imagen">
                <img src="./img/yo.jpeg" alt="Tu imagen de perfil" className="perfil-img" />
              </div>
            </div>
          </div>
        </nav>

        <div className="custom-container">
          <nav className="navbar navbar-expand-sm navbar">
            <div className="container-fluid">
              <div className="container">
                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                  <ul className="navbar-nav flex-grow-1 d-flex justify-content-center align-items-center">
                    <li className="nav-item">
                      <a id="link" className="nav-link" href="./Bienvenida" onClick={iniciarProgreso}>PULSE AQUÍ PARA CONTINUAR</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <footer style={{ position: 'relative', minHeight: '100px' }}>
          {mostrarSpinner && (
            <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="spinner-grow text-dark" role="status" style={{ width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}

export default Inicio;

