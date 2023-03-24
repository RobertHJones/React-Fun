// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [buttonType, setButtonType] = useState("btn btn-primary");

  let array = [
    "btn btn-primary",
    "btn btn-secondary",
    "btn btn-success",
    "btn btn-danger",
    "btn btn-warning",
    "btn btn-info",
    "btn btn-light",
    "btn btn-dark",
    "btn btn-link",
  ];

  function handleChange() {
    let random = Math.random() * 9;
    let floor = Math.floor(random);
    setButtonType(array[floor]);
    console.log(buttonType, floor);
  }
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
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button
        onChange={handleChange}
        type={buttonType}
        text={buttonType.slice(8)}
      />
    </div>
  );
}

export default App;
