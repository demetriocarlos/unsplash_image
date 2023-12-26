
 import { ClipLoader } from 'react-spinners' 
import style from './Spinner.module.css'

//<MoonLoader color="#7676d7" />
export const Spinner = () => {
  return (
    <div className={style.spinner}> 

      <ClipLoader
      color="#7676d7 "
      size={65}
/>
    </div>
  )
}
