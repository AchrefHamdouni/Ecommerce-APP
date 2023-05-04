import React, { useState } from 'react';

interface FilteredStoreProps {
  allData: () => void;
  categories: { idcategory: number; name: string }[];
  filterBycategory: (value: number) => void;
  setPrice: (value: number | null) => void;
  setMinPrice: (value: number | null) => void;
}

const FilterStore = ({
  allData,
  categories,
  filterBycategory,
  setPrice,
  setMinPrice,
}: FilteredStoreProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <div className="col-md-2 h-screen bg-gray-200 text-gray-900 min-h-screen">
      <br />
      <h3 className="text-orange-800 font-extrabold text-xl  flex items-left px-3 py-2">
        Categories
      </h3>
      <h6 className=" text-xl px-3 py-3 hover:text-red-300 duration-300"

        onClick={() => {
          setSelectedCategory('');
          allData();
        }}
        onMouseEnter={(e) => {
          e.currentTarget.classList.add('text-yellow-500');
        }}
        onMouseLeave={(e) => {
          e.currentTarget.classList.remove('text-yellow-500');
        }}
      >
        All
      </h6>
      {categories.map((e, i) => (
        <h6
        className=" text-l px-3 py-1 hover:text-red-300 duration-300"

          key={i}
          onClick={() => {
            setSelectedCategory(e.name);
            filterBycategory(e.idcategory);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.classList.add('text-yellow-300');
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove('text-yellow-300');
          }}
          style={{ color: selectedCategory === e.name ? 'orange' : '' }}
        >
          {e.name}
        </h6>
      ))}
      <br />
      <h3 className="text-orange-800 font-extrabold text-xl  flex items-left px-3 py-2 mb-3">
        Filter By Price
      </h3>
      <div className="flex items-center mb-2 px-3">
        <input
          type="number"
          className="bg-gray-700 text-gray-300 rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="minPrice"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMinPrice(Number(e.target.value))
          }
        />
      </div>
      <div className="flex items-center mb-2 px-3">
        <input
          type="number"
          className="bg-gray-700 text-gray-300 rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="maxPrice"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrice(Number(e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default FilterStore;
