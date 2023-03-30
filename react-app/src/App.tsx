import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const [buttonType, setButtonType] = useState("btn btn-primary");
  const [alerted, setAlerted] = useState(false);

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
    setAlerted(true);
  }

  let items = [
    "Wellingborough",
    "Birmingham",
    "Wigston",
    "Ellesmere Port",
    "Leamington",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Like
        onClick={() => {
          console.log("Clicked");
        }}
      />
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
