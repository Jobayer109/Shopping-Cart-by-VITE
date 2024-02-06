import React from "react";
import TableRow from "./TableRow2";
import productList from "./data";

class PracticeCart extends React.Component {
  state = {
    products: productList.map((item) => ({ ...item, quantity: 0, total: 0 })),
  };

  render() {
    return (
      <div>
        <hr />
        <h1>Explore class component</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((option) => (
              <TableRow key={option.id} {...option} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PracticeCart;
