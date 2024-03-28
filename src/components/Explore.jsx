import React, { useState } from 'react';
import ProductCard from './Productcard';

// Dummy product data
const products = [
  { id: 1, name: 'Black T-Shirt', category: 'tshirt', price: 1999, image: 'https://www.barbanerastyle.com/wp-content/uploads/2020/08/barbanera-plain-black-raw-cotton-t-shirt1.jpg' },
  { id: 2, name: 'Blue T-Shirt', category: 'tshirt', price: 1599, image: 'https://i5.walmartimages.com/asr/3c92c819-468f-4edd-8098-551a16ea9f1c.a8809b55a1038c8f51139443cd9e92db.jpeg' },
  { id: 3, name: 'Printed T-Shirt', category: 'tshirt', price: 2499, image: 'https://simpleteeshops.com/wp-content/uploads/2020/02/Graphic-Printed-T-Shirt-for-Men-USA-Flag-T-Shirt.jpg' },
  { id: 4, name: 'red T-Shirt', category: 'jeans', price: 2999, image: 'https://fullsourcemedia.s3.amazonaws.com/images/items/b/raw/5000_Red_1_A.jpg' },
];

const ExploreSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() !== '') {
      const filteredSuggestions = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    const filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setSuggestions([]);
    handleSearch();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Explore Our Products</h1>
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-md">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : searchTerm ? (
          <p className="text-center text-gray-600 text-xl">No products found.</p>
        ) : (
          <p className="text-center text-gray-600 text-xl">
            Start exploring by searching for a product.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExploreSection;