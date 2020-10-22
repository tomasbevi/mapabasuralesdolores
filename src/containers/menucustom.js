import React, { useState , useEffect } from 'react';
import {
    CSidebarNavItem
  } from '@coreui/react'

const MenuCustom = () => {

  const [menu , setMenu] = useState(null);

  useEffect(() => {
    obtenerdatos();
  }, [])

  const obtenerdatos = async () => {
    const data = await fetch(process.env.REACT_APP_URL_API + "/basurales")
    const lista = await data.json()
    setMenu(lista);
  }
if(menu){
  return (
      menu.map((place, idx) => (
          <CSidebarNavItem
            key={idx}
            name={place.nombre}
            to={"/mapabasural/"+ place.id}
          />
          ))
  )
    
}else{
  return(
    <div><p>Cargando</p></div>
  )
}
}

export default MenuCustom;
