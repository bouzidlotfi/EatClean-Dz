import {React} from 'react'
import './Detailsproduct.css'
import details from '../Products/products.json'
import { Link } from 'react-router-dom'



function Detailsproduct({detail, setDetail}) {

  return (
    <>  
    {/* {detail? */}
        <div id='detailContainer'>
            {
               details.map( detail =>{
                return (
                    <div id='detailContent' key={detail.id}>

                        <Link to={`/Product/${detail.id}`}>
                        <div id='prodPics'></div>
                        {/* <img src={detail.image[0]}/> */}
                        <div id='prodInfos'>
                            <div id='prodName'>{detail.nom}</div>
                            <div id='ingredient'>{detail.ingredient}</div>
                            <div id='freeof'>{detail.freeof}</div>
                            <div id='allergens'>{detail.allergens}</div>
                            <div id='facts'>{detail.facts}</div>
                        </div>
                    </Link>
                    </div>
                )                   
               }) 
            }
        </div>
    {/* :null} */}
    </>
  )
}

export default Detailsproduct