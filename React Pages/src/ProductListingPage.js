import React from 'react';
import NavBar from './NavBar';

const ProductListingPage = () => {
  // Demo product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 24.99,
      image: 'product2.jpg',
    },
  ];

  const handleAddToCart = (productId) => {
    console.log(`Product with ID ${productId} added to cart.`);
  };

  return (
    <div>
      <NavBar />
      <h1 className="page-title">Product Listing Page</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;