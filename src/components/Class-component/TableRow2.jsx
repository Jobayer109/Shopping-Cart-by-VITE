const TableRow = (option) => {
  const { id, name, stock, price, quantity, total } = option;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button>+</button>
        <button>-</button>
      </td>
    </tr>
  );
};

export default TableRow;
