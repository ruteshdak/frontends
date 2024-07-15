
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
const Cards = () => {
  // State to hold products data
  const [products, setProducts] = useState([]);
  // Fetch data from API on component mount
  useEffect(() => {
    fetchData();
  }, []);
  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8080/products');
      const data = await res.json();
      console.log('fetched data:', data);
      if (Array.isArray(data.page) && data.page.length > 0) {
        setProducts(data.page);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
