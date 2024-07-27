import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import AddProducts from './AddProducts';
import Login from './Login';
import Card from './Card';
import * as bootstrap from "bootstrap";
import $ from 'jquery'; // Import jQuery

function Navbar(props) {
  const [cart, setCart] = useState({});

  useEffect(() => {
    // Initialize Bootstrap popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, {
        trigger: 'manual',
        html: true
      });
    });

    // Update popover content when cart changes
    function updatePopoverContent() {
      const popoverElement = document.getElementById("mypopover");
      if (popoverElement) {
        let cartData = '';
        for (let id in cart) {
          cartData += `QTY: ${cart[id][0]} NAME: ${cart[id][1]} PRICE: ${cart[id][2]} <br/>`;
        }
        cartData += `<a href='/productData.html' class='btn btn-success'>Continue</a>`;
        
        $(popoverElement).attr("data-content", cartData);
        $(popoverElement).popover('show'); // Show the popover
      }
    }

    updatePopoverContent(); // Call the function to update content and show the popover

    // Cleanup popover on unmount
    return () => {
      const popoverElement = document.getElementById("mypopover");
      if (popoverElement) {
        $(popoverElement).popover('dispose');
      }
    };
  }, [cart]); // Dependency array includes `cart` to re-run effect when `cart` changes

  function updateCart(newCart) {
    setCart(newCart);
  }

  function pleaseLogOut() {
    window.location.pathname = "/login";
  }

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Shopper App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button type="button" className="btn btn-secondary" id="mypopover" data-html="true" data-toggle="popover" data-placement="bottom" data-content="">
                    Cart
                  </button>
                </li>
                {props.initial ? (
                  <>
                    <button className="btn btn-outline-light" onClick={pleaseLogOut}>Logout</button>
                    <li className="nav-item">
                      <Link to="/home" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add" className="nav-link active">Add Products</Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                  </li>
                )}
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/home" element={<Card updateCart={updateCart} />} />
          <Route path="/add" element={<AddProducts />} />
          <Route path="/login" element={<Login info={props.data} />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
