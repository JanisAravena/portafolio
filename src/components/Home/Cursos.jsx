import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { IoIosDocument } from 'react-icons/io';

function Cursos() {
  const [modals, setModals] = useState({
    cloud: false,
    javascript: false,
    java: false,
    scrum: false
  });

  const showModal = (modal) => {
    setModals({ ...modals, [modal]: true });
  };

  const hideModal = (modal) => {
    setModals({ ...modals, [modal]: false });
  };

  return (
    <div id="navbar-principal" className="container-fluid d-flex align-items-center justify-content-center vh-100">
      {/* Contenedor principal centrado vertical y horizontalmente */}
      <div>
        {/* Sección de navegación */}
        <nav id="navbar-segundario" className="navbar">
          <div className="container-fluid d-flex align-items-center justify-content-center">
            <div className="navbar-brand text-white" style={{ fontSize: '28px' }}>Full Stack JavaScript</div>
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
              <p className="mb-0 text-center text-white"></p>
              <a href="https://www.linkedin.com/in/jaravenae/" className="btn btn-dark" target="_blank" title="Ir a Linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <p id="minombre" className="mb-0 me-2 text-white p-2">Janis</p>
              <img src="./img/yo.jpeg" alt="Tu imagen de perfil" className="perfil-img" />
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
          <div className="certificados" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="certificados">
            <div className="certificado" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>                <div>
                  <h4>Fundamentos de Arquitectura Cloud</h4>
                  <p>Universidad de Santiago de Chile - Capacitación Usach</p>
                </div>
                <Button variant="btn btn-dark" onClick={() => showModal('cloud')}>
                  Ver certificado
                </Button>
                <Modal show={modals.cloud} onHide={() => hideModal('cloud')} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Fundamentos de Arquitectura Cloud</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe src="./CVDownloader/Cloud.pdf" width="100%" height="500px"></iframe>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="btn btn-dark" onClick={() => showModal('cloud')}>
      <IoIosDocument /> {/* Muestra el icono junto con el texto */}
      Ver certificado
    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="certificado" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4>Full Stack JavaScript</h4>
                  <p>Generation Chile</p>
                </div>
                <Button variant="btn btn-dark" onClick={() => showModal('javascript')}>
                  Ver certificado
                </Button>
                <Modal show={modals.javascript} onHide={() => hideModal('javascript')} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Full Stack JavaScript</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe src="./CVDownloader/JavaScript.pdf" width="100%" height="500px"></iframe>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => hideModal('javascript')}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="certificado" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4>Full-Stack en JAVA</h4>
                  <p>Coding Dojo</p>
                </div>
                <Button variant="btn btn-dark" onClick={() => showModal('java')}>
                  Ver certificado
                </Button>
                <Modal show={modals.java} onHide={() => hideModal('java')} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Técnicas de Desarrollo de Aplicaciones Full-Stack en JAVA</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe src="./CVDownloader/FULL-STACK-JAVA.pdf" width="100%" height="500px"></iframe>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => hideModal('java')}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="certificado" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4>Scrum Foundation Professional SFPC</h4>
                  <p>CertiProf</p>
                </div>
                <Button variant="btn btn-dark" onClick={() => showModal('scrum')}>
                  Ver certificado
                </Button>
                <Modal show={modals.scrum} onHide={() => hideModal('scrum')} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Scrum Foundation Professional SFPC</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe src="./CVDownloader/Scrum.pdf" width="100%" height="500px"></iframe>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => hideModal('scrum')}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <p>Nota: "Espero que encuentres inspiración en mi proyecto de portafolio y estoy ansiosa de explorar como podemos crear juntos soluciones digitales impactantes."</p>

      </div>
    </div>
  );
}

export default Cursos;
