const TableRow = (product) => {
  const { id, name, stock, price } = product;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>0</td>
      <td>0</td>
      <td>
        <button>+</button>
        <button>-</button>
      </td>
    </tr>
  );
};

export default TableRow;
