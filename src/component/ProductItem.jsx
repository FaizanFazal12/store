import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/features/Cart/cart';
export default function ProductItem() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); // Start with loading state
  useEffect(() => {
    async function getProduct() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data); // Update the whole product object
      setLoading(false); // Set loading to false once data is fetched
    }
    getProduct();
  }, [id]); // Include id as a dependency

  const addCart = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {product.title}
              </h1>
              <p className="mb-8 leading-relaxed">{product.description}</p>
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 text-xl flex">
                  {[...Array(Math.round(product.rating))].map((_, index) => (
                    <span key={index} className="mr-1">
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{product.rating}</span>
              </div>
              <div className="flex justify-center">
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={() => addCart(product)}
                >
                  Add to Cart
                </button>
                <Link to="/cart" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Go to Cart
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className=" object-center rounded"
            alt="hero"
            src={product.thumbnail}
          />
        </div>
      </div>
    </section>
  );
}
