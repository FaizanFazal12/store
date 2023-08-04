import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
        Latest Products
      </h2>
      <nav>
        <ul className='container flex items-center justify-center space-x-4'>
          <li className='mx-4'>
            <button
              className={`font-bold text-blue-500 ${filteredProducts.length === product.length ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
              onClick={() => handleCategoryClick('All')}
            >
              All
            </button>
          </li>
          {Array.from(new Set(product.map(item => item.category))).map(category => (
            <li className='mx-4 font-serif font-bold' key={category}>
              <button
                className={`text-gray-600 hover:text-blue-500 ${filteredProducts.some(item => item.category === category) ? 'text-blue-500' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

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
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title.slice(0, 20)}...
                  </h2>
                  <p className="mt-1 mb-4">{item.price}</p>

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
