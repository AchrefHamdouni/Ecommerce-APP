import React from 'react'
type storeItem = {
    idproducts: number;
    quantity: number;
    image_url: string;
    name_product: string;
    price: number;
    idcategory:number
  }
  type prodProps={
    products:storeItem[]
  }
const Products = ({products}:prodProps) => {
  return (
    <div>
      <h3 className="bg-gray-400 text-xl text-gray-800 font-bold py-2 px-4 rounded-xl border border-gray-800 hover:bg-gray-500">Products</h3>
    <table className="table table-primary">
      <thead>
        <tr >
          <th scope="col">Product ID</th>
          <th scope="col"> name</th>
          <th scope="col">Price</th>
          <th scope="col">quantity </th>
          <th scope="col">image Url </th>
          <th scope="col">category </th>
        </tr>
      </thead>
      <tbody>
        {products.map(e =>(<tr className="table-primary" key={e.idproducts}>
          <td>{e.idproducts}</td>
          <td>{e.name_product}</td>
          <td>{e.price}</td>
          <td>{e.quantity}</td>
          <td ><img className='w-18 h-16 ' src={e.image_url}/></td>
          <td>{e.idcategory}</td>
        </tr>))}
      </tbody>
    </table>
  </div>
  )
}

export default Products