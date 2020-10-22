import React from 'react';


const Mapa = React.lazy(() => import('./views/dashboard/Mapa'));
const Detalle = React.lazy(() => import('./views/dashboard/Detalle'));
   

const routes = [
  { path: '/mapabasural/' ,exact: true, name: 'Mapa', component: Mapa },
  { path: '/mapabasural/:id', name: 'Detalle', component: Detalle },
];

export default routes;
