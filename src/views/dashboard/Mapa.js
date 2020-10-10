import React, { lazy } from 'react'
import {
  CCardBody,
  CRow
} from '@coreui/react'

import MapaDetalleMarker from './MapdetalleMarker.js';



const WidgetsDropdownMapa = lazy(() => import('../widgets/WidgetsDropdownMapa.js'))

const Mapa = () => {
  return (
    <>
      <CCardBody>
          <CRow>
            <MapaDetalleMarker />
          </CRow>
      </CCardBody>
      <WidgetsDropdownMapa />
      
    </>
  )
}

export default Mapa
