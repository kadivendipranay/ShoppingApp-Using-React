import React from 'react'
import {myDatabase} from "../firebase.js"

function AddProducts() {
  
  const [productData, setProductData]=React.useState({
    productSIno: "",
    productName: "",
    productImageUrl: "", 
    productDescription:"" ,
    productOriginalPrice:"" ,
    productDiscountedPrice:""
  })
  function collectIt(event)
  {
    const myData=event.target.value
    setProductData({...productData, [event.target.name]: myData})
  }
  function saveData()
  {
    //Logic to insert/add the data in to the database
    myDatabase.collection("products").add({
      sino: productData.productSIno,
      name: productData.productName,
      imageUrl: productData.productImageUrl,
      description: productData.productDescription,
      originalPrice: productData.productOriginalPrice,
      discountedPrice: productData.productDiscountedPrice
    })
  }

  return (
    <div className="row" style={{margin: 40}}>
      <div className="col-md-3">
      <label>Product SIno:</label>
       <input type="number" name="productSIno"  class="form-control" onChange={collectIt}/><br/> <br/>

<label>Product Name:</label>
<input type="text" name="productName" class="form-control" onChange={collectIt}/> <br/> <br/>

<label>Product Image URL:</label>  
<input type="text" name="productImageUrl" class="form-control" onChange={collectIt}/> <br></br>

<label>Product Description:</label>  
<textarea rows="6" cols="40" name="productDescription" class="form-control" onChange={collectIt} /> <br></br>

<label>product Original Price:</label>
<input type="number" name="productOriginalPrice" class="form-control" onChange={collectIt}/> <br></br>

<label>product Discounted Price:</label>
<input type="number" name="productDiscountedPrice" class="form-control" onChange={collectIt}/><br/> <br/>
<button className="btn btn-outline-success" onClick={saveData}>Add Product</button>
      </div>
       
    </div>
  )
}

export default AddProducts


