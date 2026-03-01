import { useState } from "react";
import Message from "./Message";

function App() {
  //   const [drink, setDrink] = useState({
  //     title: "Americano",
  //     price: 5,
  //   });

  //   const handleClick = () => {
  //     // const newDrink = {
  //     //     // title: drink.title,
  //     //     ...drink,
  //     //     price: 6
  //     // }
  //     // setDrink(newDrink);

  //     setDrink({...drink, price:6});
  //   };

  // Another Example
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: "San Francisco",
//       zipCode: 94111,
//     },
//   });

//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zipCode: 94112 },
//     });
//   };

  // Another Example : Array
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    // Add
    setTags([...tags, 'exciting']);

    // Remove
    setTags(tags.filter(tag => tag !== 'happy'));

    //Update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
  };

  return (
    <div>
      {/* {drink.price} */}
      {/* {customer.address.zipCode} */}
      {tags}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
