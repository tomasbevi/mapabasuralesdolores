import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselControl,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow,
  CImg
} from '@coreui/react'
import isEmpty from 'lodash.isempty';


const Sliderdetalles =   (galeria) => {

if(galeria.data)
  if(galeria.data.length == 1){
    var slider=false
    var image=true
  }else{
     slider=true
     image=false
  }

  return (
    !isEmpty(galeria.data) && (
    <CRow>
      <CCol xs="12" xl="12">
        <CCard>
          <CCardHeader>
            Imagenes
          </CCardHeader>
          <CCardBody>
          {(image) && (
            <CImg
                  src={process.env.PUBLIC_URL + '/imgs/'+ galeria.data[0].src}
                  className="d-block w-100 "
                 
                />
          )}
          {(slider) && (
             <CCarousel>
              <CCarouselInner>
              {galeria.data.map((gale, idx) => {
              return (
                <CCarouselItem key={idx}>
                <CImg
                
                  src={process.env.PUBLIC_URL + '/imgs/'+ gale.src}
                  className="d-block w-100 "
                  alt={'Foto nro '+idx}
                />
                </CCarouselItem>
                 )
              })
            }  
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
   ) )
}

export default Sliderdetalles
