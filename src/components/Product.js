import React from "react";
  
export default function Product(props) {

    return(
       <>
            <div className="row">
                <div className="col-5 mt-2">
                    <h2>
                        {props.product.name}
                        <span class="badge bg-secondary"> ₹{props.product.price}</span>
                    </h2>
                </div>
                <div className="col-3 mt-2">
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-danger" onClick= {() => {this.decrementQuantity(props.index);}}>-</button>
                        <button type="button" class="btn btn-warning">{props.product.quantity}</button>
                        <button type="button" class="btn btn-success" onClick= {() => {this.incrementQuantity(props.index);}}>+</button>
                    </div>
                </div>
                <div className="col-2 mt-2">
                {props.product.quantity * props.product.price}
                </div>
                <button className="col-2 btn btn-danger mt-2">
                    Remove
                </button>
            </div>
       </> 
    )
}
  