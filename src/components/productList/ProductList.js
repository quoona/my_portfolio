import React from "react";
import "./productList.css";
import Product from "../product/Product";
import facebook_clone from "../../images/facebook_clone.png";
import { products } from "../../data";
function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Project</h1>
        <p className="pl-desc">
          This is some of my project i'm still working on :)
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
