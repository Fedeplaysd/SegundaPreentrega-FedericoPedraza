import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncMock.js';
import ItemList from '../ItemList/ItemList.jsx';
import { getProductsByCategory } from '../../asyncMock.js';
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(()=>{
      const asynFunctions = categoryId ? getProductsByCategory(categoryId) : getProducts;
      asynFunctions(categoryId)
            .then( res => {
                setProducts(res);
            })
    },[categoryId])

    console.log(products)
    return (
      <>
        <h1>{greetings}</h1>
        <ItemList products={products}/>
      </>
    );
}

export default ItemListContainer;