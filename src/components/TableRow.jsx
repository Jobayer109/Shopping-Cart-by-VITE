const TableRow = (product) => {
  const { id, name, stock, price, quantity, total, increment, decrement } =
    product;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {quantity}/{stock}
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button onClick={() => increment(id)} disabled={quantity === stock}>
          +
        </button>
        <button onClick={() => decrement(id)}>-</button>
      </td>
    </tr>
  );
};

export default TableRow;
