import React, {useState , useEffect} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton
} from '@coreui/react'


const WidgetsDropdownMapa = () => {

  const [detalle , setDetalle] = useState(null);

  useEffect(() => {
     dameDetalles();
  },[])

  const dameDetalles = async () => {
    const respuesta = await fetch(process.env.REACT_APP_URL_API + "/basurales");
    const resultado = await respuesta.json();
    setDetalle(resultado)
  }

  var cantidadbasurales = 0;
  var tipo1=0, tipo2=0, tipo3 = 0;
 

  if(detalle) {
  cantidadbasurales = detalle.length;

   detalle.map((resu) => {

    if(resu.estado === 1){
      tipo1++
    }
    if(resu.estado === 2){
      tipo2++
    }
    if(resu.estado === 3){
      tipo3++
    }
    return resu
   })

  }

  // render
  return (
    <div>
    <CRow>

      <CCol sm="6" lg="3" className="my-1">
        <CWidgetDropdown
          color="gradient-primary"
          header={cantidadbasurales}
          text="Cantidad de Basurales"
          className="h-100"
        >
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" className="my-1">
        <CWidgetDropdown
          color="gradient-danger"
          header={tipo1}
          text="Activos"
          className="h-100"
        >
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" className="my-1">
        <CWidgetDropdown
          color="gradient-warning"
          header={tipo2}
          text="En Recuperación"
          className="h-100"
        >
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" className="my-1">
        <CWidgetDropdown
          color="gradient-success"
          header={tipo3}
          text="Recuperados"
          className="h-100"
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
    <CRow>
        <CCol sm="12" lg="12" className="my-1">
        <CCard>
            <CCardHeader>
              Sumando Eco - Micro Basurales!
            </CCardHeader>
            <CCardBody>
              Dentro de Sumando Eco Dolores, tenemos un proyecto de erradicar los basurales a cielo abierto de la ciudad de Dolores.
              Si queres participar como voluntario podés inscribirte al siguiente link y no pondremos en contacto.
            </CCardBody>
              <CButton  onClick={()=>{window.open("https://www.sumandoeco.com.ar/ser-voluntario/" , "_blank")}} size="lg" className="btn-linkedin btn-brand mr-1 mb-1">Quiero Ser Voluntario!</CButton>
          </CCard>
        </CCol>
    </CRow>
    </div>
  )
}

export default WidgetsDropdownMapa
