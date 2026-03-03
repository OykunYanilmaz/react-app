import { useEffect, useRef, useState } from "react";
import ProductList from "./expense-tracker/components/ProductList";

function App() {
  const [category, setCategory] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  //afterRender
  useEffect(() => {
    // Side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App - Oykun";
  });

  const connect = () => console.log("Connecting");
  const disconnect = () => console.log("Disconnecting");

  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
      <br />
      <br />
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
