import React from 'react';
import NavBar from './NavBar';

const ProductDetailsPage = () => {
  const product = {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    image: 'product1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  const handleAddToCart = (productId) => {
    console.log(`Product with ID ${productId} added to cart.`);
  };

  return (
    <div>
      <NavBar />
      <h1 className="page-title">Product Details Page</h1>
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button
          className="add-to-cart-button"
          onClick={() => handleAddToCart(product.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;