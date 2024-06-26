import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import "../Products/Products.css";




const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="products_container">
      {
    data.map((eachProduct) => (
    <ProductCard eachProduct={eachProduct} />
    ))}
    </div>
  );
};

export default Products;
