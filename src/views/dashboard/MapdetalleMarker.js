
import React, { useState , useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import datajs from './places.json';
import Marker from './Marker'
import {useHistory} from 'react-router-dom'

const MapaDetalle = () =>{

  const history = useHistory();

  var [places , updateoarray] = useState();

  useEffect(() => {
   console.log("sad")
  });

   const defaultProps = {
    center: {
      lat: -36.3096557,
      lng: -57.6779217
    },
    zoom: 14
  };

  //GENERO EL CONTENIDO DEL MAPA
   /* const corcho = datajs.results.map((place) => ({
      lat: place.location.lat,
      lng: place.location.lng,
      weight: Math.floor(Math.random() * Math.floor(5)),
    }));
    let heatmapData = {
      positions: corcho,
      options: {
        radius: 20,
        opacity: 1,
      },
    };*/
    
    //ACCION QUE SE EJECUTA CUANDO TERMINA LA ANIMACION DEL ZOOM
     const accionahacer = (args) =>  {
          
         if (args <= 13)  {
           //   console.log("entro . borro")
             // console.log("a ver "+ places)
            //  updateoarray("") 
           //   heatmapData=""
           //   console.log("a ver reset " + places)
          }else {
         //   console.log("Salio cargo ")
         //     updateoarray(datajs)
          }
           
           
    }
    
    //ACCION AL CLICK EN LOS MARKERS
    const onChildClickCallback = (key) => {
        history.push(`/detalle/${key}`);
    };

    //LE ASIGNO EL VALOR DEL ARRAY DEL PRINCIPIO
     updateoarray = (valor) => {
         places = valor;
    }

    //CARGO LA DATA CUANDO INICIALIA
    updateoarray(datajs)

    return (
        <div style={{ height: '400px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{key : process.env.REACT_APP_MAP_KEY , libraries: ['visualization']}}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            //heatmap={heatmapData}
            yesIWantToUseGoogleMapApiInternals
            onChildClick={onChildClickCallback}
            onZoomAnimationEnd={accionahacer}
            resetBoundsOnResize={true}
          >
              {places.results.map((place) => 
                {
                    return(
                      <Marker
                      estado={place.estado}
                      tipo={place.tipo}
                      key={place.id}
                      text={place.nombre}
                      lat={place.location.lat}
                      lng={place.location.lng}
                    />
                    )
                })
              }
          </GoogleMapReact>
        </div>
      );
  
}

export default MapaDetalle;