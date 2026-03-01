import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button> */}
      {/* <BsFillCalendarFill color="red" size="40" /> */}
      {/* <Button onClick={() => {}}>My Button</Button> */}
      <Like onClick={() => console.log("clicked")}/>
    </div>
  );
}

export default App;
