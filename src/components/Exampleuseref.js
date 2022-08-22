import React from 'react'
import {useRef, useEffect} from 'react'

function Exampleuseref() {
    const myref = useRef(null)
    useEffect(() => {
        myref.current.focus()
    
      
    }, [])
    
  return (
    <div>
        <input ref={myref} type="text" />
    </div>
  )
}

export default Exampleuseref