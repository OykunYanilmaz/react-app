import { useState } from "react";
// import { produce } from "immer";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // Exercise 1
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick1 = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  // Exercise 2
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick2 = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  // Exercise 3
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick3 = () => {
    //without immer
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    });
  };

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <button onClick={handleClick1}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={handleClick3}>Click Me</button>
      <br />
      <ExpandableText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum in
        expedita quod quos a natus amet architecto alias sit distinctio
        reiciendis tenetur facilis, optio voluptates earum molestias impedit
        provident quisquam illo! Eaque modi saepe sint quibusdam, laboriosam
        pariatur minima magnam dicta maiores veniam incidunt impedit quisquam
        magni? Qui ipsa quos aut fuga incidunt mollitia ducimus consectetur,
        dolorem unde repudiandae labore laborum iusto ullam nemo laudantium
        optio asperiores perferendis libero iste sit. Repudiandae deserunt saepe
        doloribus fuga itaque suscipit sapiente! Nihil mollitia suscipit dolorum
        ea fugit vel eos delectus, repellat exercitationem maxime? Reprehenderit
        architecto corporis maiores aspernatur, dolorum sint nostrum quae.
      </ExpandableText>
    </div>
  );
}

export default App;
