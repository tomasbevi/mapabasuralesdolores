import React from 'react'
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
  CSidebarBrand,
  CImg
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react';


// sidebar nav config
import navigation from './_nav'
import MenuCustom from './menucustom';


const TheSidebar = () => { 

  
  const dispatch = useDispatch()
  var show = useSelector(state => state.sidebarShow)
  

  return (
  <CSidebar
    show={show}
    onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
  >
     <CSidebarBrand  onClick={()=>{window.open("https://www.sumandoeco.com.ar/")}} className="d-md-down-none" to="/" style={{backgroundColor : '#ebedef'}}>
     <CImg
          className="c-sidebar-brand-full"
          src={process.env.REACT_APP_PUBLIC_URL+"/imgs/logo.png"}
        />
      </CSidebarBrand>
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
           
            <MenuCustom/>
            </CSidebarNav>
         
      </CSidebarNav>
        <CSidebarMinimizer className="c-d-md-down-none"/>
  </CSidebar>
  )
}


export default React.memo(TheSidebar)
