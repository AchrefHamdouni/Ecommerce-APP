import React from 'react'
type item={
    id_orderitems:number;
    order_id:number;
    price:number;
    quantity:number;
    idproducts:number
}
type orderItemProps={
    orderItems:item[]
}
const OrderItems = ({orderItems}:orderItemProps) => {
  return (
    <div>
        <h3 className="bg-gray-400 text-xl text-gray-800 font-bold py-2 px-4 rounded-xl border border-gray-800 hover:bg-gray-500">ORDER ITEMS</h3>
    <table className="table table-primary">
      <thead>
        <tr >
          <th scope="col"> ID</th>
          <th scope="col"> orderId</th>
          <th scope="col">Quantity</th>
          <th scope="col"> Item price </th>
          <th scope="col">ID product </th>

        </tr>
      </thead>
      <tbody>
        {orderItems.map(e =>(<tr className="table-primary" key={e.id_orderitems}>
          <td>{e.id_orderitems}</td>
          <td>{e.order_id}</td>
          <td>{e.quantity}</td>
          <td>{e.price}</td>
          <td>{e.idproducts}</td>

        </tr>))}
      </tbody>
    </table>
  </div>
  )
}

export default OrderItems