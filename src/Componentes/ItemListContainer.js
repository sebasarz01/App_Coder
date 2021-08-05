import  React ,  { useEffect ,  useState } from "React" ;
import ItemCount  from  "./ItemCount"
import  { producto }  from  "./productos"
import ItemList from  "./ItemList"

const  ItemListContainer  =  ({saludo})  => {
    const  onAdd  =  (cantidad)  => {
        consola . log (cantidad)
    }

    const  [productos , setProductos]  =  useState ([])

    useEffect ( ( )  =>  {
        const  promesa  =  new promesa(( resolver ) => {
        setTimeout ( ( ) => {
                resolver(productos)
        } , 2000 )
    } )
    promesa.entonces ((productos) => {
        setProductos (producto)
    } )
    } , [ ] )

    return (
<>
    <h1 style ={{color:'red'}}> ¡Hola! {saludo} </h1>
    < p >Aqui encontraras los mejores celulares de diferentes gamas</p>
    <ItemList  productos = { productos }/>
    <ItemCount  stock = {100}  initial = {1}  onAdd = {onAdd}/>
</>
)
}

export default ItemListContainer