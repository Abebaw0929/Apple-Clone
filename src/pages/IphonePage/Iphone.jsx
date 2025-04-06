import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Iphone.css";

const Iphone = () => {
  const [iphone, setIphone] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/get-products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIphone(data);
      });
  }, []);
  return (
    <div className="iphone">
      <h1>iPhones</h1>
      <p>The best for the brightest.</p>
      <div className="product-container">
        {iphone.map((product, index) => (
          <div
            className={`product-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={product.product_id}
          >
            <div className="card1">
              <h1>{product.product_name}</h1>
              <p>{product.product_brief_description}</p>
              <p>{product.price_range}</p>

              <Link to={`/product/${product.product_id}`}>
                Learn more <i className="fa-solid fa-greater-than"></i>
              </Link>
            </div>

            <img src={product.product_img} alt={product.product_name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iphone;
