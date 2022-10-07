import React from 'react'
import { Contador } from './components/Contador';
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';
//import { TiposBasicos } from './typescript/TiposBasicos';
const App = () => {
  return(
    <div>
      <h1>Introducción a Type Script with React</h1>
      <hr></hr>
      {/*<TiposBasicos></TiposBasicos>*/}
      {/*<ObjetosLiterales/>*/}
      <Contador/>
    </div>
  )
}
export default App;