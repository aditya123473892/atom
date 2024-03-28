import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-gray-900 font-bold mb-4">
          Price: ₹{product.price.toLocaleString('en-IN')}
        </p>
        <button className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;