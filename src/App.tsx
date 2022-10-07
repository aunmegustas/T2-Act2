//import { Contador } from './components/Contador';
import { ContadorHook } from './components/ContadorHook';
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';
//import { TiposBasicos } from './typescript/TiposBasicos';
const App = () => {
  return(
    <div>
      <h1>Introducción a Type Script with React</h1>
      <hr/>
      {/*<TiposBasicos></TiposBasicos>*/}
      {/*<ObjetosLiterales/>*/}
      {<ContadorHook/>}
    </div>
  )
}
export default App;