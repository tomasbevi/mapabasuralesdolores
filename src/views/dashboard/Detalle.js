import React from 'react'

import {
  
} from '@coreui/react'

import datajs from './places.json';

const Sliderdetalles = React.lazy(() => import("../base/carousels/slider"));

const Detalle = (props)  =>  {

      var varid = props.match.params.id;
      const cantidadresults =  datajs.results;

      var {nombre, descripcion} = 'a';
      var galeria = [];

        cantidadresults.map((resu) =>  {
          try {
            if(resu.id == varid){
              nombre = resu.nombre;
              descripcion = resu.descripcion;
              galeria = resu.imgs;
          }
          } catch (error) {
            console.log(error);
          }
          return console.log('return')
      })
 
      console.log(galeria)

      return (
        <>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Sliderdetalles data={galeria}/>
            </React.Suspense>
        </>
      );
    

}

export default Detalle

