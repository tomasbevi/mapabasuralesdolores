import React , {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react';

import datajs from '../views/dashboard/places.json';

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  var show = useSelector(state => state.sidebarShow)
  const [places]= useState(datajs);
  const cantidadresults = places.results;

  return (
  <CSidebar
    show={show}
    onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
  >
     
    <CSidebarNav>
        <CCreateElement
          _tag="CSidebarNavItem"
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
        
        <CSidebarNavTitle >
        <h6><CIcon name="cil-list" className="mr-2"/>Listado Completo</h6>
         </CSidebarNavTitle>
            <CSidebarNav
                tag='CSidebarNav'
                name='Listado Completo'
                icon='cil-puzzle'
                components={{
                  CSidebarNavItem
                }}
            > 
           
              {cantidadresults.map((place, idx) => {
                return (
                <CSidebarNavItem
                  key={idx}
                  name={place.nombre}
                  to={"/detalle/"+ place.id}
                />
                )
               })}
            </CSidebarNav>
         
      </CSidebarNav>
        <CSidebarMinimizer className="c-d-md-down-none"/>
  </CSidebar>
  )
}

export default React.memo(TheSidebar)
