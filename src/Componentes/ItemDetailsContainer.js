import react ,  { useEffect ,  useState }  from  "react" ;
import  ItemDetail  from "./ItemDetail"

const  ItemDetailContainer  = () => {

    const  [ producto , setProducto]  =  useState ([])

    useEffect (() => {
        setTimeout ( ( ) => {
            buscar ('https://i.pinimg.com/474x/f1/5b/97/f15b971b55bf32e3b553f5c00052125c.jpg')
            . entonces ( respuesta => respuesta . json ())
            . luego ( json => console.log(json))
            . luego ((prod) => {setProducto(prod)})
        } , 2000 )
    } , [])
    const  getItems = () => {
        return(producto) ;

    }

    return  (
        <div>
             <ItemDetail productos = {getItems()}/>
        </div>
    )
}

export default ItemDetailContainer 