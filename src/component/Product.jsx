import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const handleCategoryClick = (cat) => {
    if (cat === 'All') {
      setFilteredProducts(product); // Show all products if 'All' is clicked
    } else {
      const category1 = product.filter((item) => item.category === cat);
      setFilteredProducts(category1);
    }
  };

  const handleFilter = () => {
    const filteredByPrice = product.filter((item) => {
      const price = parseFloat(item.price);
      return (minPrice === '' || price >= parseFloat(minPrice)) &&
             (maxPrice === '' || price <= parseFloat(maxPrice));
    });

    const sortedProducts = filteredByPrice.slice().sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
        Latest Products
      </h2>
      <nav className="bg-gray-100 py-4">
  <ul className="container flex items-center justify-center space-x-4">
    <li className="mx-4">
      <button
        className={`font-bold text-blue-500 ${
          filteredProducts.length === product.length
            ? 'text-blue-500'
            : 'text-gray-600 hover:text-blue-500'
        }`}
        onClick={() => handleCategoryClick('All')}
      >
        All
      </button>
    </li>
    {Array.from(new Set(product.map((item) => item.category))).map(
      (category) => (
        <li className="mx-4 font-serif font-bold" key={category}>
          <button
            className={`text-gray-600 hover:text-blue-500 ${
              filteredProducts.some((item) => item.category === category)
                ? 'text-blue-500'
                : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        </li>
      )
    )}
  </ul>
</nav>

<div className="flex items-center justify-center space-x-4 mt-4">
  <input
    type="number"
    placeholder="Min Price"
    value={minPrice}
    onChange={(e) => setMinPrice(e.target.value)}
    className="border border-gray-300 rounded-md p-2"
  />
  <input
    type="number"
    placeholder="Max Price"
    value={maxPrice}
    onChange={(e) => setMaxPrice(e.target.value)}
    className="border border-gray-300 rounded-md p-2"
  />
  <div className="flex items-center space-x-2">
    <label className="text-gray-600">
      <input
        type="radio"
        value="ascending"
        checked={sortOrder === 'ascending'}
        onChange={() => setSortOrder('ascending')}
        className="mr-1"
      />
      Ascending
    </label>
    <label className="text-gray-600">
      <input
        type="radio"
        value="descending"
        checked={sortOrder === 'descending'}
        onChange={() => setSortOrder('descending')}
        className="mr-1"
      />
      Descending
    </label>
  </div>
  <button
    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    onClick={handleFilter}
  >
    Apply Filter
  </button>
</div>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {filteredProducts.map((item) => (
              <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden cursor-pointer">
                  <img
                    alt="ecommerce"
                    className="object-center w-full h-full block"
                    src={item.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title.slice(0, 20)}...
                  </h2>
                  <p className="mt-1 mb-4">${item.price}</p>

                  <Link
                    to={`/productitem/${item.id}`}
                    className="mt-9 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-slate-200"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
