
 import { Button } from "react-bootstrap"
 import { Derecha } from "./Iconos/Flechas"
 import { Izquierda } from "./Iconos/Flechas"
 import style from "./Arrow.module.css"

export const Arrow = ({page,setPage,totalPages}) => {
  return (
    <div className={style.buttons}>
      
    {page > 1 && (
      <Button className={style.boton} onClick={() => setPage(page - 1)}> <Izquierda/></Button>
    )}
    {  page < totalPages && (<p>{page}</p>)}
    {page < totalPages && (
      <Button className={style.boton} onClick={() => setPage(page + 1)}><Derecha/></Button>
      )}

  </div>
  )
}
