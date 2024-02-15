
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from './card.module.css'

export const ImageCard = ({image}) => {
  return (
    <> 
    <div>
      <Link to={ `/image/${image.id}`}> 
         <img 
             
            src={image.urls.small} 
            alt={image.alt_description} 
            className={styles.image}
            />
      </Link>
    </div>
    
         
     
    </>
  )
}
