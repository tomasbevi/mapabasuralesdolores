/* eslint-disable eqeqeq */
import React , { useState , useEffect  }from 'react'

import {
  CImg
} from '@coreui/react'


const Detalle =  (props)  =>  {

  const [loading , setLoading] = useState(true)
  const [detalle , setDetalle] = useState(false);
  var galeria=[]

  useEffect(() => {
     dameDetalles()
  },[props])


  const dameDetalles = async () => {
    galeria=[]
    setLoading(true)
    const respuesta = await fetch(process.env.REACT_APP_URL_API + "/basurales/"+props.match.params.id);
    const resultado = await respuesta.json();
    await setLoading(false)
    await setDetalle(resultado)
  }

  if(detalle){
  var {nombre,descripcion} = detalle;
  var ContenidoC;
  detalle.imgs ? galeria = detalle.imgs : galeria = [];
  }

  if(!galeria){
    //DEFINO SI VA ARRAY VACIO
      ContenidoC = `No hay imagenes para mostar.`;
  }else{
      var ancho; var alto;
      ContenidoC = galeria.map((gale, idx) => {
        if(gale.width>gale.height){
          //es horizontal
            ancho="516"
            alto="290"
        }else{
            ancho='290'
            alto='516'
        }
      return (
        <>
        <CImg
          id={idx}
          width={ancho}
          height={alto}
          src={process.env.REACT_APP_PUBLIC_URL+gale.url}
          className="img-thumbnail m-1"
        />
        </>
        )
      });
  }
if(!loading){
      return (
        <>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            {ContenidoC}
        </>
      )
}else{
  return(
    <div>Cargando...</div>
  )
}

}

export default Detalle
