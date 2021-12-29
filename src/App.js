import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const productList = [
    {
      price : 99999,
      name : "Iphone 10s",
      quantity : 4,
    },
    {
      price : 999999,
      name : "Iphone 11s",
      quantity : 1,
    }
  ]

  let [addproductList,setAddProductList] = useState(productList);
  let [totalAmount,setTotalAmount] = useState(0);
 
  const  incrementQuantity = (index) => {
    let newProductList = [...addproductList]
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount);  
    setAddProductList(newProductList);
  }

  const  decrementQuantity = (index) => {
    let newProductList = [...addproductList]
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0 )
    {  newProductList[index].quantity-- ;
      newTotalAmount -=  newProductList[index].price;
    } 
    setTotalAmount(newTotalAmount);   
    setAddProductList(newProductList);
  }

  const resetQuantity = () => {
    let newProductList = [...addproductList]
    newProductList.map(()=>{
      productList.quantity = 0
    })
    setAddProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem = () => {
    let newProductList = [...addproductList]
    let newTotalAmount = totalAmount;
    newProductList.slice(index+1,1)
    setAddProductList(newProductList);
  }

  return (
    <>  
        <Navbar/>
        <main class="container">
        <ProductList productList={ productList } incrementQuantity={incrementQuantity} decrementQuantity ={decrementQuantity} />
        </main>
        <Footer resetQuantity={ resetQuantity }/>
    </>
  );
}

export default App;
