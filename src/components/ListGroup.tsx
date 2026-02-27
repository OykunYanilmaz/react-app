// import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

//   const message = items.length === 0 ? <p>No item found</p> : null;

//   const getMessage = () => {
//     return items.length === 0 ? <p>No item found</p> : null;
//   }
  
//   if (items.length === 0)
//     return (
//       <>
//         <h1>List</h1>
//         <p>No item found</p>
//       </>
//     );

  return (
    <>
      <h1>List</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
