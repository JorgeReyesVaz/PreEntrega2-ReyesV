import './App.css'
import { ItemListContainer } from './componentes/ItemListContainer'
import {Navbar} from './componentes/Navbar'

function App() {
  
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting='Lista de articulos'/>
    </>
  )
}

export default App
