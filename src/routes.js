import React from 'react';


const Mapa = React.lazy(() => import('./views/dashboard/Mapa'));
const Detalle = React.lazy(() => import('./views/dashboard/Detalle'));
   

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/mapa' ,exact: true, name: 'Mapa', component: Mapa },
  { path: '/detalle/:id', name: 'Detalle', component: Detalle },
];

export default routes;
