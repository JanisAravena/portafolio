import React from 'react';
import './styles.css';
import './css.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Inicio() {

  const iniciarProgreso = (event) => {
    event.preventDefault();
  
    let progressCounter = 0;
    const progressBar = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
  
    const interval = setInterval(() => {
      progressCounter++;
      progressBar.style.width = `${progressCounter}%`;
      progressText.textContent = `${progressCounter}%`;
  
      if (progressCounter >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          window.location.href = './Bienvenida';
        }, 1000);
      }
    }, 50);
  };
  

  return (
    <div id="navbar-principal" className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div>
        <nav id="navbar-segundario" className="navbar navbar">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <div className="navbar-brand text-white">Full Stack JavaScript</div>
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
              <p className="mb-0 text-center text-white"></p>
              <div className="social-icons">
              <a href="https://www.linkedin.com/in/jaravenae/" class="btn btn-dark" target="_blank">
  <i class="fab fa-linkedin"></i>
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
                      <a id="link" className="nav-link" href="#" onClick={iniciarProgreso}>PULSE AQUÍ PARA CONTINUAR</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <footer>
          <div id="progress-bar">
            <div id="progress"></div>
            <div id="progress-text">0%</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Inicio;
