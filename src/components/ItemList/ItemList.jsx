import './ItemList.css'
import Item from "../Item/Item"
const ItemList = ({products}) => {
  return (
    <div className="divProductos">
        {
            products.map( prod => {
                return (
                    <Item key={prod.id} {...prod} />
                )
            })
        }
    </div>
  )
}

export default ItemList
