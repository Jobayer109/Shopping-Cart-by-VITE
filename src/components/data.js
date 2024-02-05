import shortid from "shortid";

const productList = [
  {
    id: shortid.generate(),
    name: "Mouse",
    stock: 10,
    price: 150,
  },
  {
    id: shortid.generate(),
    name: "Keyboard",
    stock: 16,
    price: 160,
  },
  {
    id: shortid.generate(),
    name: "Watch",
    stock: 20,
    price: 250,
  },
  {
    id: shortid.generate(),
    name: "Pant",
    stock: 14,
    price: 180,
  },
];

export default productList;
