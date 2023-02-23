import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../requests/product';
import { useParams } from 'react-router-dom';
import ProductDescr from '../../components/ProductDescr';


export default function ProductPage() {

const dispatch = useDispatch();

const product = useSelector(state => state.product);

const { id } = useParams();


useEffect(() => {
  dispatch(getProduct(id))
}, [])

  return (
    <div>
      <ProductDescr {...product} key={product.id}/>
    </div>    
  )
}
