import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Mapa Basurales',
    to: '/mapabasural/',
    icon: <CIcon name="cil-map" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info'
     // text: 'NEW',
    }
  }
]

