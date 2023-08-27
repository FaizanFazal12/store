import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
import Category from './Category';

export default function Product() {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [page, setPage] = useState(1)

  // this state are used to filter the product by a price
  // const [minPrice, setMinPrice] = useState('');
  // const [maxPrice, setMaxPrice] = useState('');
  // const [sortOrder, setSortOrder] = useState('ascending');



  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();

        setProduct(data.products)
        setFilteredProducts(data.products); // Initialize filteredProducts with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);
  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= product.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }
  const handleCategoryClick = (cat) => {
    if (cat === "All") {
    
      setFilteredProducts(product)
    }
    else {

      const categoryProducts = product.filter((item) => item.category === cat);
      setFilteredProducts(categoryProducts);
    }
  };

  // const handleFilter = () => {
  //   const filteredByPrice = product.filter((item) => {
  //     const price = parseFloat(item.price);
  //     return (minPrice === '' || price >= parseFloat(minPrice)) &&
  //       (maxPrice === '' || price <= parseFloat(maxPrice));
  //   });

  //   const sortedProducts = filteredByPrice.slice().sort((a, b) => {
  //     if (sortOrder === 'ascending') {
  //       return a.price - b.price;
  //     } else {
  //       return b.price - a.price;
  //     }
  //   });

  //   setFilteredProducts(sortedProducts);
  // };

  return (
    <div className='flex'>
      <Category handleCategoryClick={handleCategoryClick} product={product} />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          Latest Products
        </h2>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {product.length > 0 &&filteredProducts.slice(page *10 -10 ,page *10).map((item) => (
                <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden cursor-pointer">
                    <img
                      className="object-center w-full h-full block"
                      src={item.thumbnail} alt={item.title}
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
        {product.length > 0 && <div className="pagination">
          <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

          {[...Array(product.length / 10)].map((_, i) => {
            return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
          })}

          <span onClick={() => selectPageHandler(page + 1)} className={page < product.length / 10 ? "" : "pagination__disable"}>▶</span>
        </div>}
      </div>
    </div>
  );
}
