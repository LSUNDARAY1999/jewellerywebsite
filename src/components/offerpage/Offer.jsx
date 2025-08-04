
import React from 'react';
import TopBar from '../header/Topbar';
import Navbar from '../header/Navbar';
import OfferProduct from './0ffer';
import { useNavigate } from 'react-router-dom';

function Offer() {
  const navigate = useNavigate(); 

  const goToOffer = () => {
    navigate('/offer');
  };

  return (
    <>
     <TopBar/>
        <Navbar/>
    <div className='offer'>
      <div className='offer-h' style={{ padding: '50px', backgroundColor: '#430a5a', color: 'white' }}>
        <h1 style={{textAlign:'center' }}>Welcome to the 30% OFF Gold Sale!</h1> <br />
        <p style={{ textAlign: 'center' }}>Here you'll find all our discounted products.</p>
      </div>

      <div className='product-list' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '50px', marginTop: '30px', backgroundColor: 'white' }}>
        {OfferProduct.map((product) => (
          <div
          className="productcard"
          key={product.id}
          style={{
            backgroundColor: 'white',
            color: '#000',
            borderRadius: '10px',
            padding: '20px',
            width: '200px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
              />
            <h4 style={{ margin: '10px 0' }}>{product.name}</h4>
            <p className="price">Price: {product.price}</p>
            <p className='discount'>Discount: {product.discount}</p>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#b15086ff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px'
            }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
        
        </>
  );
}

export default Offer;
