import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import './App.css'

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
