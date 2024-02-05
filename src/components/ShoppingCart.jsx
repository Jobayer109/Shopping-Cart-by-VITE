import TableRow from "./TableRow";
import productList from "./data";

const ShoppingCart = () => {
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
          {productList.map((product) => (
            <TableRow key={product.id} {...product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
