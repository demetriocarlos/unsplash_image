
import { useCallback, useEffect, useRef, useState } from "react"
import axios from "axios"
import { Search } from "./Search/Search"
import { ImageCard } from "./Card/ImageCard"
import { Arrow } from "./Arrow"
import { Spinner } from "./Iconos/Spinner"
import styles from './ImgGrid.module.css'

const API_URL ='https://api.unsplash.com/search/photos'
const IMAGES_PER_PAGE=24;

function ImageGrid() {
  console.log('key',import.meta.env.VITE_API_KEY)
const searchInput = useRef(null)
const [images, setImages] = useState([])
const [page,setPage]= useState(1)
const [totalPages, setTotalPages] = useState(0)
const [errorMsg , setErrorMsg] = useState("")


const [isLoading, setIsLoading] = useState(false)

 
const fetchImages = useCallback(async () => {
  try {
    if (searchInput.current.value) { 
      setErrorMsg('')
      setIsLoading(true)
      const {data} =await axios.get(
        `${API_URL}?query=${ 
          searchInput.current.value
        }&lang=es&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
        import.meta.env.VITE_API_KEY}`
        );
         
        //actualiza los resultados de la api
          setImages(data.results)
          //actualiza numero total de paginas
          setTotalPages(data.total_pages)
          setIsLoading(false)
    }
 } catch (error) {
  //mensaje de error
  setErrorMsg("Error fetching images. try again later.")
   console.log(error)
   console.log("errrror")
 }
 // la varable de dependencias cada ves que cambie, el efecto se ejecutara
}, [page])


useEffect(() => {
   
  fetchImages()
},[fetchImages]);


const resetSearch = ()=>{
  fetchImages()
  //restablecer el balor de la pajina a uno
  setPage(1)
}

 

//funcion para seleccionar opcion de busqueda
  const handleSelection = (selection) =>{
    searchInput.current.value = selection
     resetSearch()
  }

   

  return (
    <>   
     
      <div className="container">
       
         <h1 id="titulo" className="title">Image Search</h1>
         {/**mensaje de error mostrado en la pantalla */}
         {errorMsg && <p className="error-msg">{errorMsg}</p>}

         {/*para hacer busquedas*/}
         <Search  resetSearch={resetSearch} searchInput={searchInput}/>

           

         <div className="filters">
            <div onClick={() => handleSelection('art')}>Art</div>
            <div onClick={() => handleSelection('nature')}>Nature</div>
            <div onClick={() => handleSelection('war')}>War</div>
            <div onClick={() => handleSelection('cat')}>Cat</div>
          </div>
             {isLoading ? (
              <Spinner/>
             ) : ( 
              <> 
        <div className={styles.images}> 
          {//mostrar imagenes
            images.map((image) => ( 
           
                <ImageCard key={image.id} image={image} />
            ))
          }
       
        </div>
        {/** las flechas para aumentar el numero de pajinas o disminuirlas */}
          <Arrow page={page}  setPage={setPage} totalPages={totalPages}/>
          </>
          )}
      </div>
          
       
    </>
  )
}

export default ImageGrid
