import React from "react";
import Product from './Product';
  
export default function ProductList(props) {
    console.log(props);
    return(
        props.productList.map((product,i)=>{
            return <Product product={product} key={ i } incrementQuantity={props.incrementQuantity} index= {i} decrementQuantity={ props.decrementQuantity }  />
        })
    )
}
  
