import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import FilterStore from "../components/FilterStore";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
interface product {
  idproducts: number;
  name_product: string;
  price: number;
  quantity: number;
  image_url: string;
  idcategory: number;
}
interface category {
  idcategory: number;
  name: string;
}
let allProduct: product[] = [];
const Store: React.FC = () => {
  const [data, setData] = useState<product[]>([]);
  const [categories, setCategories] = useState<category[]>([]);
  const [price, setPrice] = useState<number | null |undefined>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setData(res.data);
      allProduct = res.data;
    });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((res) => setCategories(res.data));
  }, []);

  const filterBycategory = (categoryid: number) => {
    setData(allProduct);

    setData(allProduct.filter((e) => e.idcategory === categoryid));
  };
  const allData = () => {
    setData(allProduct);
  };
  const filteredProducts = data.filter(
    (product) =>
      product.name_product.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (price? product.price < price:product.price <Infinity) &&  product.price > (minPrice ?? 0)  
  );
  

  return (
    <div>
    
   
      <div className="row  ">
      
      <FilterStore
        allData={allData}
        categories={categories}
        filterBycategory={filterBycategory}
        setPrice={setPrice}
        setMinPrice={setMinPrice}
      />
      <div className="col-md-10 ">
        <div className="fixed top-4 right-96 flex items-center justify-center z-9999">
          <input
            type="text"
            placeholder="Search products"
            className="border border-orange-700 px-4 py-2 rounded-md max-w-sm w-96"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredProducts.length === 0 ? (
          <h2 className="text-3xl ">Sorry, we don't find any result</h2>
        ) : (
          <section className="grid grid-cols-1 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 bg-gray-200">
            {filteredProducts.map((e) => (
              <Card
                id={e.idproducts}
                name_product={e.name_product}
                price={e.price}
                image_url={e.image_url}
                quantity={e.quantity}
                key={e.idproducts}
              />
            ))}
          </section>
        )}
      </div>
      <Footer />
    </div>
   
    </div>
  );
};

export default Store;