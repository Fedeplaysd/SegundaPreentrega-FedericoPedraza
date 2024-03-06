import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncMock.js';
import ItemList from '../ItemList/ItemList.jsx';
import { getProductsByCategory } from '../../asyncMock.js';
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(()=>{
      const asynFunctions = categoryId ? getProductsByCategory(categoryId) : getProducts()
      asynFunctions(categoryId)
            .then( res => {
                setProducts(res);
            })
    },[categoryId])

    console.log(products)
    return (
      <>
        <ItemList products={products}/>
      </>
    );
}

export default ItemListContainer;