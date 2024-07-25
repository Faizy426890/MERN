import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useLocation, useNavigate } from 'react-router-dom';
import './Desc.css';
=======
import './Desc.css';
import { useLocation, useNavigate } from 'react-router-dom';
>>>>>>> origin/main
import Fb from './images/fb.png';
import insta from './images/insta-png.webp';
import mail from './images/mail.png'; 
import whatsapp from './images/whatsapp.png';

const ProductDesc = () => {
  const location = useLocation();
<<<<<<< HEAD
  const { product } = location.state || {}; // Handle case where product might be undefined
=======
  const { product } = location.state;
>>>>>>> origin/main
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
<<<<<<< HEAD
  const [mainImage, setMainImage] = useState(product?.images[0] || '');
=======
  const [mainImage, setMainImage] = useState(product.images[0]);
>>>>>>> origin/main
  const [transitionClass, setTransitionClass] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
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
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    if (product) {
      setMainImage(product.images[0]);
      setQuantity(1); // Reset quantity when product changes
    }
=======
    setQuantity(1); // Reset quantity when product changes
>>>>>>> origin/main
  }, [product]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleProductClick = (newProduct) => {  
    navigate('/ProductDesc', { state: { product: newProduct } });
<<<<<<< HEAD
=======
    window.location.reload(); // Reload the page to update the product
>>>>>>> origin/main
  };

  const handleBuyNow = () => {
    navigate('/ConfirmOrder', { state: { product, quantity } });
  };

  const handleThumbnailClick = (image) => {
    setTransitionClass('fade-out');
    setTimeout(() => {
      setMainImage(image);
      setTransitionClass('');
    }, 300);
  };

<<<<<<< HEAD
=======
  // Render loading message while fetching data
>>>>>>> origin/main
  if (isLoading) {
    return <div>Loading...</div>;
  }

<<<<<<< HEAD
=======
  // Render error message if fetch fails
>>>>>>> origin/main
  if (error) {
    return <div>{error}</div>;
  } 

  return (
    <>
      <div className='Desc-container'>
        <div className='Desc-Img'>
          <img className={`desc-image ${transitionClass}`} src={mainImage} alt={product.productName} />
          <div className='desc-images'> 
<<<<<<< HEAD
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.productName}
                onClick={() => handleThumbnailClick(image)}
                style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer on hover
              />
            ))}
=======
          {product.images[0] && (
              <img
                src={product.images[0]}
                alt={product.productName}
                onClick={() => handleThumbnailClick(product.images[0])}
                style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer on hover
              />
            )}

            {product.images[1] && (
              <img
                src={product.images[1]}
                alt={product.productName}
                onClick={() => handleThumbnailClick(product.images[1])}
                style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer on hover
              />
            )}
            {product.images[2] && (
              <img
                src={product.images[2]}
                alt={product.productName}
                onClick={() => handleThumbnailClick(product.images[2])}
                style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer on hover
              />
            )}
>>>>>>> origin/main
          </div>
        </div>
        <div className='Desc-data'>
          <h1>{product.productName}</h1>
          <p>Rs: {product.productPrice}</p>
          <hr className='full' />
          <div className="quantity-control">
            <button type="button" className="minus" onClick={handleDecrement}>-</button>
            <span className="quantity">{quantity}</span>
            <button type="button" className="plus" onClick={handleIncrement}>+</button>
          </div>
          <a className='a' onClick={handleBuyNow}>Buy Now</a>
          <div className='social-icons'>
<<<<<<< HEAD
            <a href="https://www.facebook.com/wittywardrobe24?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <img src={Fb} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/wittywardrobe24?igsh=dG9kbTBldGJqNWl4" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" />
            </a>
=======
            <a href="https://www.facebook.com/wittywardrobe24?mibextid=ZbWKwL"> <img src={Fb} alt="Facebook" /> </a>
            <a href="https://www.instagram.com/wittywardrobe24?igsh=dG9kbTBldGJqNWl4"><img src={insta} alt="Instagram" /></a>
>>>>>>> origin/main
            <img id='mail' src={mail} alt="Mail" /> 
            <img src={whatsapp} alt="WhatsApp" />
          </div>
          <div className='Description'>
            <h2>Description</h2> 
            <p>{product.productDescription}</p>
          </div>
        </div> 
      </div>
      <div className='Section-MayLike'>  
        <hr className='lin' />
        <div className='MayLike-Head'>
          <p>You May Also Like</p>
        </div>
        <section className="shirts-section">
          <div className='Display-Products'>
            {products.slice(0, 7).map((product) => (
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDesc;
