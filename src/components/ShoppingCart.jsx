import { useState } from "react";
import TableRow from "./TableRow";
import productList from "./data";

const ShoppingCart = () => {
  const [products, setProducts] = useState(
    productList.map((item) => ({ ...item, quantity: 0, total: 0 }))
  );

  const updateQuantity = (id, delta) => {
    setProducts(
      products.map((product) => {
        if (
          id === product.id &&
          product.quantity + delta >= 0 &&
          product.quantity + delta <= product.stock
        ) {
          product.quantity += delta;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  const increment = (id) => {
    updateQuantity(id, 1);
  };

  const decrement = (id) => {
    updateQuantity(id, -1);
  };

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        <tbody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              {...product}
              increment={increment}
              decrement={decrement}
            />
          ))}
        </tbody>
      </table>
      <div>
        <h5>Total: 500 TK</h5>{" "}
      </div>
    </div>
  );
};

export default ShoppingCart;
