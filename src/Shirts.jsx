import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shirts.css';

const Shirts = ({ onBuyNow }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
<<<<<<< HEAD
  const apiUrl = import.meta.env.VITE_API_URL; // Fetch API URL from environment variables
=======
>>>>>>> origin/main

  useEffect(() => {
    const fetchProducts = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch(`${apiUrl}/products`, { // Corrected URL with template literals
=======
        const response = await fetch('http://localhost:3001/products', {
>>>>>>> origin/main
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const result = await response.json();
        setProducts(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
        setIsLoading(false);
      }
    };

    fetchProducts();
<<<<<<< HEAD
  }, [apiUrl]); // Added apiUrl as dependency to useEffect
=======
  }, []);
>>>>>>> origin/main

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleProductClick = (product) => {
    navigate('/ProductDesc', { state: { product } });
  };

  return (
    <>
      <div className='heads'>
<<<<<<< HEAD
        <h1>PRODUCTS</h1>
=======
        <h1>SHIRTS</h1>
>>>>>>> origin/main
      </div>
      <section className="shirts-section">
        <div className='Display-Products'>
          {products.slice(0, 4).map((product) => (
            <div 
              key={product._id} 
              className="Product-container" 
              onClick={() => handleProductClick(product)}
            >
              <div className='Product-list'>
                {product.images[0] && <img src={product.images[0]} alt={product.productName} />} 
                <h2>{product.productName}</h2>
                <p>Rs: {product.productPrice}</p>    
              </div>
              <div className="wrapper">
                <a 
                  className='a' 
                  onClick={(e) => {
                    e.stopPropagation();
                    onBuyNow(product);
                  }}
                >
                  Buy Now
                </a>
              </div>
            </div> 
          ))}
        </div>
      </section> 
    </>
  );
}

export default Shirts;
