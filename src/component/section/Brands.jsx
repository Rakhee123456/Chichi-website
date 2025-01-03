import React from 'react'
import './Brands.css'
import BrandLogo from "../../asset/brandslogo.png"
const Brands = () => {
  return (
    <div  className='brands'>

      <h1> Brands We Deal</h1>
     <div className='brands-logo'>
         <img src={BrandLogo} alt="food-logo" />
         
     </div>
    </div>
    
  )
}

export default Brands
