import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({name, img, category, price, description, stock}) => {
  return (
    <article>
      <h1>{name}</h1>
      <img src={img} alt="Photo" style={{width: "400px", height: "auto"}} />
      <p>Categoria: {category}</p>
      <p>{description}</p>
      <h1>$ {price}</h1>
      <ItemCount stock={stock}/>
    </article>
  )
}

export default ItemDetail
