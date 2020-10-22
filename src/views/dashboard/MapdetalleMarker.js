
import React ,{ useState , useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

const MapaDetalle = () => {

  const [mapa , setMapa] = useState(null);

  useEffect(() => {
    obtenerdatos();
  }, [])

  const obtenerdatos = async () => {
    const data = await fetch(process.env.REACT_APP_URL_API + "/basurales")
    const lista = await data.json()
    setMapa(lista);
  }

  const defaultProps = {
    center: {
      lat: -36.3096557,
      lng: -57.6779217
    },
    zoom: 14
  };
  if(mapa){
    return(
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key : process.env.REACT_APP_MAP_KEY , libraries: ['visualization']}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          resetBoundsOnResize={true}
        >
            {mapa.map((place) => 
              {
                  return(
                    <Marker
                    estado={place.estado}
                    tipo={place.tipo}
                    addId={place.id}
                    text={place.nombre}
                    lat={place.location.lat}
                    lng={place.location.lng}
                  />
                  )
              })
            }
        </GoogleMapReact>
      </div>
    )

  }else{
    return(
      <div>Cargando</div>
    )
  }
}

export default MapaDetalle;