import React from 'react';


function Proyecto() {
  return (
    <div id="navbar-principal" className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div>
        <nav id="navbar-segundario" className="navbar navbar">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <div className="navbar-brand text-white">Full Stack JavaScript</div>
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
              <p className="mb-0 text-center text-white"></p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/jaravenae/" className="btn btn-dark">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <p id="minombre" className="mb-0 me-2 text-white p-2">Janis</p>
              <img src="./img/yo.jpeg" alt="Tu imagen de perfil" className="perfil-img" />
            </div>
          </div>
        </nav>
        <div className="custom-container">
          <nav className="navbar navbar-expand-sm navbar">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100 justify-content-around">
                  <li className="nav-item">
                    <a className="nav-link" href="./Informacion">SOBRE MI</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./Habilidades">HABILIDADES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./Cursos">CURSOS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./Proyecto">PROYECTO</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>        
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 10%' }}>
            <div className="image-container">
              <img src="./img/1.jpeg" alt="Proyecto" className="perfil-img" style={{ width: '90%' }} />
            </div>
            <div className="text-container p-3">
              <h1>Full-stack Developer</h1>
              <p>Municipalidad de Renca · Proyecto integrador</p>
              <p>Desarrollo de Web App de Gestión de Rutas de Aprendizaje: “Currículum Renca”
                Basada en una arquitectura web moderna MERN utilizando JavaScript en todos los
                niveles: desde el frontend hasta el backend y la base de datos. Con el objetivo de crear un sistema de
                gestión y seguimiento.</p>
            </div>
          </div>
          <a href="https://github.com/arthemia4/Proyecto-CurriculumRenca-G3" class="btn btn-dark mt-4 github-btn" target="_blank" rel="noopener noreferrer">
  <i class="fab fa-github"></i> Ver Proyecto en GitHub
</a>
        </div>
        
      </div>
    </div>
  );
}

export default Proyecto;

