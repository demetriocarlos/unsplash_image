 
 import {  Form } from "react-bootstrap"
 

// eslint-disable-next-line react/prop-types
export const Search = ({resetSearch ,searchInput}) => {

  //funcion para hacer busquedas
  const handleSearch = (event) =>{
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    console.log(searchInput.current.value)
    resetSearch()
  }
  return (
    <div> 

        <div className="search-section">
          <Form onSubmit={handleSearch}>
             <Form.Control
                type="search"
                placeholder="search"
                className="search-input"
                //hace referencia a lo escrito el el input
                ref={searchInput}
             />
           </Form>
        </div>
    </div>
  )
}
