import React from "react";
type order = {
  id_orders: number;
  orderdate: string;
  totalprice: number;
  id_customers: number;
};
type orderProps = {
  orders: order[];
  orderDetails: (param: number) => void;
};
const Orders = ({ orders, orderDetails }: orderProps) => {
  return (
    <div>
      <h3  className="bg-gray-400 text-xl text-gray-800 font-bold py-2 px-4 rounded-xl border border-gray-800 hover:bg-gray-500"
>ORDERS</h3>
      <table className="table table-primary">
        <thead>
          <tr>
            <th scope="col">order ID</th>
            <th scope="col"> Date</th>
            <th scope="col">total Price</th>
            <th scope="col">Customer</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((e) => (
            <tr
              className="table-primary"
              key={e.id_orders}
              onClick={() => orderDetails(e.id_orders)}
              style={{ cursor: "pointer" }}
            >
              <td>{e.id_orders}</td>
              <td>{e.orderdate}</td>
              <td>{e.totalprice}</td>
              <td>{e.id_customers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;