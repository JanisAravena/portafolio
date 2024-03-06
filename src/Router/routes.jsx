import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ElInicio from "../Views/ElInicio";
import LaBienvenida from '../Views/LaBienvenida';
import MiInformacion from '../Views/MiInformacion';
import MisHabilidades from '../Views/MisHabilidades';
import MisCursos from '../Views/MisCursos';
import MisProyecto from '../Views/MisProyectos';


const router = createBrowserRouter([
  { path: "/", element: <ElInicio /> },
  { path: "/Bienvenida", element: <LaBienvenida /> },
  { path: "/Informacion", element: <MiInformacion /> },
  { path: "/Habilidades", element: <MisHabilidades /> },
  { path: "/Cursos", element: <MisCursos /> },
  { path: "/Proyecto", element: <MisProyecto /> },


 
]);

export default router;
