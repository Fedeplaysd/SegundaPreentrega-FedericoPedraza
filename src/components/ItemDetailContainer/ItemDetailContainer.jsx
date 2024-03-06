import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null)
  const {productId} = useParams()
  
  useEffect(() => {
      getProductById(productId)
      .then(res => {
        setProducts(res)
      })
      .catch(error => 
        console.log(error))
  }, [productId])
  return (
    <div>
      <ItemDetail {...products}/> 
    </div>
  )
}

export default ItemDetailContainer
