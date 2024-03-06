import { Link } from "react-router-dom"

const Item = ({id ,name, img, category, price}) => {
  return ( 
    <article>
      <h1>{name}</h1>
      <img src={img} alt="productPhoto" style={{width: "200px", height: "auto"}}/>
      <p>Categoria: {category}</p>
      <h1>$ {price}</h1>
      <Link to={`/detail/${id}`}>Ver Detalles</Link>
    </article>
  )
}

export default Item
