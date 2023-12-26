 import ImageGrid from "./Compenents/ImegeGrid"
 import {
  BrowserRouter as Router,
   Routes, 
   Route,
   Link 
 } from "react-router-dom"
import { ImgDetalles } from "./Compenents/Detalles/ImgDetalles"
import { Home } from "./Compenents/Iconos/Home"

  
function App() {
   
/**<div>
          <ImageGrid/>
       </div>  */
  return (
    <>
     
     <Router>
         <header>
           
          <Link to="/">
            <Home/> 
          </Link>
          
         </header>
         <main>
          

         <Routes>
            <Route path="/image/:id" element={<ImgDetalles/> }> 
                Movie
            </Route>
            
            <Route path="/"  element={<ImageGrid/>}>
                Home
            </Route>
         </Routes>
         </main>
      </Router>
       
    </>
  )
}

export default App
