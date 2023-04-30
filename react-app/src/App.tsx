import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
const [expenses, setExpenses] = useState([
  {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
  {id: 2, description: 'bbb', amount: 10, category: 'Utilities'},
  {id: 3, description: 'ccc', amount: 10, category: 'Utilities'},
  {id: 4, description: 'ddd', amount: 10, category: 'Utilities'}
])
 

  const [buttonType, setButtonType] = useState("btn btn-primary");
  const [alerted, setAlerted] = useState(false);
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  // let array = [
  //   "btn btn-primary",
  //   "btn btn-secondary",
  //   "btn btn-success",
  //   "btn btn-danger",
  //   "btn btn-warning",
  //   "btn btn-info",
  //   "btn btn-light",
  //   "btn btn-dark",
  //   "btn btn-link",
  // ];

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  // function handleChange() {
  //   let random = Math.random() * 9;
  //   let floor = Math.floor(random);
  //   setButtonType(array[floor]);
  //   console.log(buttonType, floor);
  //   setAlerted(true);
  // }

  // let items = [
  //   "Wellingborough",
  //   "Birmingham",
  //   "Wigston",
  //   "Ellesmere Port",
  //   "Leamington",
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}
      {/* <ExpandableText maxChars={100} /> */}
      {/* <Form /> */}
      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}/>
      {/* <Like
        onClick={() => {
          console.log("Clicked");
        }}
      /> */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alerted === true && (
        <Alert onChange={() => setAlerted(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button
        onChange={handleChange}
        type={buttonType}
        text={buttonType.slice(8)}
      /> */}
    </div>
  );
}

export default App;
