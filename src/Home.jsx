import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Nav from './Navbar.jsx';  
import './Home.css';  
import Shirts from './Shirts.jsx'; 
import Cover from './images/Cover.jfif';    
import About from './About.jsx';  // Import the About component  

const Home = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const navigate = useNavigate(); 
  const shirtsRef = useRef(null);
  const MySwal = withReactContent(Swal);

  const handleShowAllProducts = () => {
    setShowAllProducts(true);
  };

  const handleBuyNow = (product) => {
    navigate('/confirmOrder', { state: { product } });
  }; 

  const handleShopNowClick = () => {
    shirtsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    MySwal.fire({
      title: 'Special Offer!',
      text: 'Order 2 products on the same day and get Free Delivery on the Second Order.',
      icon: 'info',
      background: '#343a40',
      color: '#fff',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  }, []);

  return ( 
    <>
      <Nav showAllProducts={handleShowAllProducts} />
      <Routes> 
        <Route path="/" element={ 
          <div>
            <section className='cover-photo'>  
              <img src={Cover} alt="Cover" /> 
              <div className="cover-text"> 
                <h1><span className="highlight">UNLEASH</span> YOUR LOOK</h1>  
                <p>Discover the latest trends in fashion and update your wardrobe with our new collection.</p> 
                <button className='Shop-button' onClick={handleShopNowClick}>
                  SHOP NOW
                  <span className="first"></span>
                  <span className="second"></span>
                  <span className="third"></span>
                  <span className="fourth"></span>
                </button>
              </div>
            </section>  
            <div ref={shirtsRef}>
              <Shirts showAllProducts={showAllProducts} onBuyNow={handleBuyNow} />  
            </div>
          </div>
        } />
        <Route path="/about" element={<About />} /> 
      </Routes> 
    </>
  );
}

export default Home;
