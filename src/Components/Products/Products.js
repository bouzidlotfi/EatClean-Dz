import {React,useState} from 'react'
import products from './products.json'
import './Products.css'
import Detailsproduct from '../Detailsproduct/Detailsproduct'
import { Link } from 'react-router-dom'


function Products() {

  const [detail, setDetail] = useState(false)
  const moreDetails = () => setDetail(true);

  return (
      <>
    <div id='productTitle'>Products</div>
    <div id="productContainer" >
      {
        products.map( product =>{
          return (
                <div id='productContent' key={product.id} onClick={moreDetails}>
              
              <Link to={`/Product/${product.id}`}>  

            <div className='product'>
              <div className='productPic'> 
                  {/* <img src= {product.image[0]}/>  */}
              </div>
              <div className='productDesc'>
                <div id='productName'>{product.nom}</div>
                <div className='detailsBtn'>More details</div>
              </div>
            </div>
              </Link>
                </div>

          )
        })
    }
      
    </div>
    {/* <Detailsproduct detail={detail} setDetail={setDetail} /> */}
    </>
  )
}

export default Products

