import React, { useState, useEffect } from "react";
import axios from "axios";
import Customers from "./Customers";
import Orders from "./Orders";
import Products from "./Products";
import OrderItems from "./OrderItems";
import Chart from "chart.js/auto";
import DataViz from "./Dataviz";
type item = {
  id_orderitems: number;
  order_id: number;
  price: number;
  quantity: number;
  idproducts: number;
};
type customer ={
    id_customers:number;
    name:string;
    email:string;
};
const Dashboard = () => {
  // states represent the tables
  let AllOrdersDetails: item[] = [];
  const [customers, setCustomers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState<item[]>([]);
  const [filteredOrderItems, setFilteredOrderItems] = useState([]);
  const [open, setOpen] = useState({
    openProduct: false,
    openCustomers: false,
    openOrders: false,
    openOrderItems: false,
  });
  //useEffect to fetch all tables from the api
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data))
      .then(() =>
        axios
          .get("http://localhost:3000/customers")
          .then((result) => setCustomers(result.data))
      )
      .then(() =>
        axios
          .get("http://localhost:3000/category")
          .then((result) => setCategories(result.data))
      )
      .then(() =>
        axios
          .get("http://localhost:3000/order")
          .then((result) => setOrders(result.data))
      )
      .then(() =>
        axios.get("http://localhost:3000/orderItems").then((result) => {
          setOrderItems(result.data);
          AllOrdersDetails = result.data;
        })
      );
  });
  const openCustomers = () => {
    setOpen({ ...open, openCustomers: !open.openCustomers });
  };
  const openProducts = () => {
    setOpen({ ...open, openProduct: !open.openProduct });
  };
  const openOrders = () => {
    setOpen({ ...open, openOrders: !open.openOrders });
  };
  const openOrderItems = () => {
    setOpen({ ...open, openOrderItems: !open.openOrderItems });
  };
  const orderDetails = (id: number) => {
    const filteredItems = orderItems.filter((e) => e.order_id === id);
    setFilteredOrderItems([...filteredItems]);
    setOpen({ ...open, openOrderItems: true, openOrders: false });
  };

  return (
    <div>
      <h1 className=" text-gray-800 text-2xl font-bold py-2 px-4 ml-36 ">
        Admin Dashboard
      </h1>
      <div>
        <DataViz
          customers={customers}
          orders={[...new Set(orders.map((o) => o.id_customers))]}
          products={products.reduce((total, e) => {
            return total + e.quantity;
          }, 0)}
          soldProduct={orderItems.reduce((totalSold, e) => {
            return totalSold + e.quantity;
          }, 0)}
          salesTurnover={products}
          totalSold={orders}
        />
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic example"
        style={{ margin: "5%" }}
      >
        <button
          type="button"
          className="bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg border border-gray-800 hover:bg-gray-500"
          onClick={openCustomers}
        >
          {!open.openCustomers ? "Customers" : "close customers table"}
        </button>
        <button
          type="button"
          className="bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg border border-gray-800 hover:bg-gray-500"
          onClick={openProducts}
        >
          {!open.openProduct ? "Products" : "close products table"}
        </button>
        <button
          type="button"
          className="bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg border border-gray-800 hover:bg-gray-500"
          onClick={openOrders}
        >
          {!open.openOrders ? "Orders" : "close Orders table"}
        </button>
        <button
          type="button"
          className="bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg border border-gray-800 hover:bg-gray-500"
          onClick={openOrderItems}
        >
          {!open.openOrderItems ? "Orders details" : "Close Orders Details"}
        </button>
      </div>
      {open.openCustomers ? <Customers customers={customers} /> : null}
      {open.openOrders ? (
        <Orders orders={orders} orderDetails={orderDetails} />
      ) : null}
      {open.openProduct ? <Products products={products} /> : null}
      {open.openOrderItems ? (
        <OrderItems orderItems={filteredOrderItems} />
      ) : null}
    </div>
  );
};

export default Dashboard;
