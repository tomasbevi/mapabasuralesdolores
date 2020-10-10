import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.tomasbevi.com.ar" target="_blank" rel="noopener noreferrer">TomasBevi.com.ar</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
