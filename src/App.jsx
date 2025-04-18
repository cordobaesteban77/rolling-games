import React, { useEffect } from 'react'
import {getProducts} from "./data/api.js"

const App = () => {
  useEffect(() => {
    getProducts().then((respuesta) => {
      console.log(respuesta)
    })
  }, [])
  
  
  
  return (
    <div>
      <h1>Proyecto 2do módulo</h1>
    </div>
  )
}

export default App