
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import style from "./ImgDetalles.module.css"
 import { Spinner } from "../Iconos/Spinner";

export const ImgDetalles = () => {
    const [image,setImage] = useState(null)
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true)

     

    useEffect(() => {
      setIsLoading(true)
      axios.get(`https://api.unsplash.com/photos/${id}`, {
        params: {
          client_id: import.meta.env.VITE_API_KEY,
          lang: 'es',
        },
         
      })
        .then((response) => {
          setImage(response.data);
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
         
    }, [id]);

    if(isLoading){
      return <Spinner/>
    }
    
    if (!image) {
      return null;
    }
  
    /*
    const downloadImage = async (imageUrl) => {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'unsplash-image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    };

    const handleDownloadClick = () => {
      downloadImage(image.links.download);
    };
  */

     

    console.log(image)
  return (
    <div className={style.container}> 
           
           <div className={style.col}>
             
            <p className={style.descripcion}>{image.alt_description}</p>
          </div>
          <img className={`${style.col}  ${style.image}`} src={image.urls.regular }  width="400px" height="auto"/>
          {/*<button onClick={handleDownloadClick}>Descargar archivo</button>*/}
           
           
    </div>
  )
}
