import React from 'react';
import Swal from 'sweetalert2';

function Informacion() {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        Swal.fire({
            title: '¡Correo electrónico copiado!',
            text: 'Esperaré tu correo',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        });
    };

    return (
        <div id="navbar-principal" className="container-fluid d-flex align-items-center justify-content-center vh-100">
            <div>
                <nav id="navbar-segundario" className="navbar navbar">
                    <div className="container-fluid d-flex align-items-center justify-content-center">
                        <div className="navbar-brand text-white">Full Stack JavaScript</div>
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
                <div className="custom-container">
                    <nav className="navbar navbar-expand-sm navbar">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav w-100 justify-content-around">
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
                    <div className="profile-container" style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                        <div style={{ width: 'auto' }}>
                            <img src="https://media.licdn.com/dms/image/D5603AQGIS8_oH390Wg/profile-displayphoto-shrink_400_400/0/1705586748936?e=1714608000&v=beta&t=9Bzbbie9hT6AXTYgIzR6H9dLmUVGdLlp9sRrtA0MHp8" alt="Tu imagen de perfil" className="perfil-img" style={{ width: '45%' }} />
                            <h1>Janis Aravena</h1>
                            <p>Full Stack JavaScript</p>
                            <a href="/JANISARAVENA-CV.pdf" download="CV_Janis_Aravena.pdf" className="btn btn-dark mt-4">
        Descargar CV <i className="fas fa-arrow-down"></i>
      </a>
                        </div>
                        <div className="profile-infos" style={{ width: '60%' }}>
                            <h1>Sobre mí</h1>
                            <p>Nací alrededor de 1998 y desde joven me apasionaron los videojuegos. Aunque comencé mi carrera como secretaria, pronto me di cuenta de que mi verdadera vocación estaba en la programación. Este 2024 finalicé mi segundo bootcamp en JavaScript y aquí nace la idea de crear mi primer portafolio.</p>
                            <p>
                                Puedes contactarme en: 
                                <a href="mailto:janisaravenaespinoza@gmail.com" className="email-link">janisaravenaespinoza@gmail.com</a>
                                <button onClick={() => copyToClipboard('janisaravenaespinoza@gmail.com')} className="btn btn-dark" title="Copiar correo electrónico">
                                    <i className="fas fa-copy"></i>
                                </button> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Informacion;
