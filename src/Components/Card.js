import React, { useState, useEffect } from 'react';
import { myDatabase } from '../firebase.js';

function Card({ updateCart }) {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    // Logic to read the data from Firestore database
    const unsubscribe = myDatabase.collection("products").onSnapshot(snapshot => {
      setProductsData(snapshot.docs.map(doc => doc.data()));
      // Update the state with the data received from Firestore
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  function collectData(event) {
    // Logic to collect the data like quantity and the id
    let cart = localStorage.getItem("cart") === null ? {} : JSON.parse(localStorage.getItem("cart"));

    let myId = event.target.id;

    if (!Array.isArray(cart[myId])) {
      // Initialize the cart entry if it doesn't exist
      let name = document.getElementById("myname" + myId)?.innerText;
      let price = Number(document.getElementById("myprice" + myId)?.innerText);
      cart[myId] = [1, name, price];
    } else {
      // Update existing cart entry
      let quantity = cart[myId][0] + 1;
      cart[myId][0] = quantity;
      let price = Number(document.getElementById("myprice" + myId)?.innerText);
      cart[myId][2] = price * quantity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart(cart); // Pass the updated cart to Navbar
  }

  return (
    <div className="all" style={{ display: "flex" }}>
      {productsData.map(i => (
        <div key={i.sino} className="card" style={{ width: 450, margin: 30, padding: 30 }}>
          <h2>{i.sino}</h2>
          <img src={i.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" id={"myname" + i.sino}>{i.name}</h5>
            <p className="card-text">{i.description}</p>
            <del><h5 className="card-title">{i.originalPrice}</h5></del>
            <h5 className="card-title" id={"myprice" + i.sino}>{i.discountedPrice}</h5>
            <a href="#" className="btn btn-primary" onClick={collectData} id={i.sino}>Add to Cart</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
