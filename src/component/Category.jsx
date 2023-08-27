import React from 'react';

export default function Category({ handleCategoryClick, product }) {
  const uniqueCategories = [...new Set(product.map(item => item.category))];

  return (
    <div className='my-7'>
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul className="sticky left-0 top-0 w-[18rem] min-h-full bg-gray-400 md:block p-4">
        <li className="mb-2">
          <input
            type="radio"
            id="all"
            name="category"
            value=""
            defaultChecked // Set the "All" category as checked by default
            onChange={() => handleCategoryClick('All')}
          />
          <label htmlFor="all" className="ml-2">
            All
          </label>
        </li>
        {uniqueCategories.length > 0 &&
          uniqueCategories.map(category => (
            <li className="mb-2" key={category}>
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                onChange={() => handleCategoryClick(category)}
              />
              <label htmlFor={category} className="ml-2">
                {category}
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
}
