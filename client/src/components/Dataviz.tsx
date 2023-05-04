import React from "react";
import { PieChart, Pie, Tooltip, Legend, Text } from "recharts";
import Products from "./Products";

const formatValue = (value) => {
  return value.toFixed(3);
};

const DataViz = ({
  customers,
  orders,
  products,
  soldProduct,
  totalSold,
  salesTurnover,
}) => {
  const data = [
    { name: "registred users", value: customers.length },
    { name: "orders", value: orders.length },
  ];
  const data2 = [
    {
      name: "All Products",
      value: products,
    },
    {
      name: "Sold Products",
      value: soldProduct,
    },
  ];
  const data3 = [
    {
      name: "sales turnover",
      value: salesTurnover.reduce(
        (total, e) => (total += Number(e.quantity * e.price)),
        0
      ),
    },
    {
      name: "total Sold",
      value: totalSold.reduce((total, e) => (total += Number(e.totalprice)), 0),
    },
  ];
  return (
    <div className="row">
      <div className="col-md-4 ">
        <PieChart width={400} height={400}>
          <Text x={200} y={20} textAnchor="middle" fontSize={18}>
            Registered Users and Orders
          </Text>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx={200}
            cy={100}
            outerRadius={100}
            fill="#8884d8"
            label
          />
          <Tooltip formatter={formatValue} />
        </PieChart>
        <Legend />
      </div>
      <div className="col-md-4 ">
        <PieChart width={400} height={400}>
          <Text x={200} y={20} textAnchor="middle" fontSize={18}>
            Product Inventory
          </Text>
          <Pie
            dataKey="value"
            data={data2}
            cx={200}
            cy={100}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip formatter={formatValue} />
        </PieChart>
        <Legend />
      </div>
      <div className="col-md-4 ">
        <PieChart width={400} height={200}>
          <Text x={200} y={20} textAnchor="middle" fontSize={18}>
            Sales Turnover and Total Sold
          </Text>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data3}
            cx={200}
            cy={100}
            outerRadius={80}
            fill="#333"
            label
          />
          <Tooltip formatter={formatValue} />
        </PieChart>
        <Legend />
      </div>
    </div>
  );
};

export default DataViz;
