
 import { Button } from "react-bootstrap"
 import { Derecha } from "./Iconos/Flechas"
 import { Izquierda } from "./Iconos/Flechas"
 import style from "./Arrow.module.css"

export const Arrow = ({page,setPage,totalPages}) => {
  return (
    <div className={style.buttons}>
       
    {page > 1 && (  
      <a href="#titulo"><Button className={style.boton} onClick={() => setPage(page - 1)}> <Izquierda/></Button></a>
    )}
    {  page < totalPages && (<p>{page}</p>)}
    {page < totalPages && (
      <a href="#titulo"> <Button className={style.boton} onClick={() => setPage(page + 1)}><Derecha/></Button></a>
      )}

  </div>
  )
}
