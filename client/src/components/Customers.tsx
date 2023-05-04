import React from "react";
type customers = {
    idcustomers: number;
    name: string;
    email: string;
  }
  type customersProps={
    customers:customers[]
  }
const Customers = ({ customers}:customersProps ) => {
  return (
    <div>
      <h3 className="bg-gray-400 text-xl text-gray-800 font-bold py-2 px-4 rounded-xl border border-gray-800 hover:bg-gray-500">CUSTOMERS</h3>
      <table className="table table-primary">
        <thead>
          <tr >
            <th scope="col">Customer ID</th>
            <th scope="col"> Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(e =>(<tr  key={e.idcustomers}>
            <td>{e.idcustomers}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;