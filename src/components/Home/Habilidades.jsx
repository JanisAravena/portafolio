import React from 'react';

const Habilidades = () => {
  const styles = {
    tableTransparent: {
      backgroundColor: 'transparent',
    },
    progress: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Puedes cambiar la opacidad aquí
    },
    progressBar: {
      backgroundColor: '#28a745', // O cualquier otro color que desees para la barra
    },
  };
  return (
    <>
      <div id="navbar-principal" className="container-fluid d-flex align-items-center justify-content-center vh-100">
        {/* Contenedor principal centrado vertical y horizontalmente */}
        <div>
          {/* Sección de navegación */}
          <nav id="navbar-segundario" className="navbar navbar-expand-lg ">
            <div className="container-fluid d-flex align-items-center justify-content-center ">
            <div className="navbar-brand text-white" style={{ fontSize: '28px' }}>Full Stack JavaScript</div>
              <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <p className="mb-0 text-center text-white"></p>
                <a href="https://www.linkedin.com/in/jaravenae/" className="btn btn-dark" target="_blank" title="Ir a Linkedin">
                 <i className="fab fa-linkedin"></i>
                  </a>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <p id="minombre" className="mb-0 me-2 text-white p-2">Janis</p>
                <img src="./img/yo.jpeg" alt="Tu imagen de perfil" className="perfil-img"/>
              </div>
            </div>
          </nav>
          {/* Contenido principal */}
          <div className="custom-container">
            <nav className="navbar navbar-expand-sm">
              <div className="container-fluid">
                {/* Botón para mostrar el menú en dispositivos pequeños */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* Contenido del navbar */}
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav w-100 justify-content-around">
                    {/* Utilizamos justify-content-around para distribuir los elementos de manera uniforme */}
                    <li className="nav-item">
                    <a className="nav-link" href="/Informacion">SOBRE MI</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Habilidades">HABILIDADES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Cursos">CURSOS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Proyecto">PROYECTO</a>
                  </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <table className="table" style={{backgroundColor: 'transparent'}}>
                    <thead>
                      <tr>
                        <th>Tecnología</th>
                        <th>Progreso</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>HTML</td>
                        <td>
                          <div className="progress">
                            <div className="progress-bar bg-success" style={{width: '90%'}}><i className="fab fa-html5"></i></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>CSS</td>
                        <td>
                          <div className="progress">
                            <div className="progress-bar bg-success" style={{width: '80%'}}><i className="fab fa-css3-alt"></i></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>JavaScript</td>
                        <td>
                          <div className="progress">
                            <div className="progress-bar bg-success" style={{width: '70%'}}><i className="fab fa-js"></i></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Bootstrap</td>
                        <td>
                          <div className="progress">
                            <div className="progress-bar bg-success" style={{width: '90%'}}><i className="fab fa-bootstrap"></i></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-6">
                  {/* Nuevo párrafo con las tecnologías adicionales */}
                  <div className="container-fluid">
                    <p>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
                    <ul className="list-group horizontal-list p-3">
                      <li className="list-item fa-lg">
                        <ul className="justify-content-between align-items-center">
                          <i className="fab fa-react fa-lg"></i>
                        </ul>
                        <ul className="justify-content-between align-items-center">
                          <i className="fab fa-node fa-lg"></i>
                        </ul>
                        <ul className="justify-content-between align-items-center">
                          <i className="fab fa-envira fa-lg"></i> 
                        </ul>
                        <ul className="justify-content-between align-items-center">
                          <i className="fab fa-git fa-lg"></i> 
                        </ul>
                        <ul className="justify-content-between align-items-center">
                          <i className="fab fa-github fa-lg"></i>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>Nota: "Espero que encuentres inspiración en mi proyecto de portafolio y estoy ansiosa de explorar como podemos crear juntos soluciones digitales impactantes."</p>
        </div>
      </div>
    </>
  );
}

export default Habilidades;
