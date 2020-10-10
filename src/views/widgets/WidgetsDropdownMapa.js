import React, {useState} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol
} from '@coreui/react'

import datajs from '../dashboard/places.json';

const WidgetsDropdownMapa = () => {

  const [places] = useState(datajs);

  const cantidadresults = places.results;
  const cantidadbasurales = cantidadresults.length;
  var tipo1 = 0;
  var tipo2 = 0;
  var tipo3 = 0;
   cantidadresults.map((resu) => {
   
    if(resu.estado === "1"){
      tipo1++
    }
    if(resu.estado === "2"){
      tipo2++
    }
    if(resu.estado === "3"){
      tipo3++
    }
    return resu
   })

  // render
  return (
    <CRow>

      <CCol sm="6" lg="3" className="my-1">
        <CWidgetDropdown
          color="gradient-primary"
          header={String(cantidadbasurales)}
          text="Cantidad de Basurales"
          className="h-100"
        >
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" className="my-1">
        <CWidgetDropdown
          color="gradient-danger"
          header={String(tipo1)}
          text="Activos"
          className="h-100"
        >
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" className="my-1">
        <CWidgetDropdown
          color="gradient-warning"
          header={String(tipo2)}
          text="En Recuperación"
          className="h-100"
        >
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" className="my-1">
        <CWidgetDropdown
          color="gradient-success"
          header={String(tipo3)}
          text="Recuperados"
          className="h-100"
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdownMapa
