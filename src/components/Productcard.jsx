import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        navigate(`/product/${product._id}`);
    };

    const handleAddToCart = (event) => {
        event.stopPropagation();
        const cartItem = {
            id: product._id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
        };
        addToCart(cartItem);
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 1500);
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
                        alt={product.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                        {product.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                        Category: {product.category}
                    </p>
                    <p className="text-gray-900 font-bold mb-4">
                        Price: ₹{product.price.toLocaleString("en-IN")}
                    </p>
                    <button
                        className={`w-full px-4 py-2 text-white font-semibold rounded-lg focus:outline-none ${
                            isAdded ? "bg-black" : "bg-black hover:bg-gray-800"
                        }`}
                        onClick={handleAddToCart}
                    >
                        {isAdded ? (
                            <span className="flex items-center justify-center">
                                <FaCheck className="mr-2" />
                                Added
                            </span>
                        ) : (
                            "Add to Cart"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
