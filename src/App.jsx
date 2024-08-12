import * as React from "react";
import './App.css'
import { ItemListContainer } from './componentes/ItemListContainer'
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { NotFound } from "./componentes/NotFound";

import {Navbar1} from './componentes/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (

      
      <BrowserRouter>
        <Navbar1/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>  
      </BrowserRouter>
      
  
  )
}

export default App
