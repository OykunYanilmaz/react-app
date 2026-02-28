// import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";
import { useState } from "react";
import styles from './ListGroup.module.css'

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   items = [];
  //   let selectedIndex = 0;

  // Hook
  //   const arr = useState(-1);
  //   arr[0] // variable (selectedIndex)
  //   arr[1] // updater function

  const [selectedIndex, setSelectedIndex] = useState(-1);

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

  // Event Handler
  //   const handleClick = (event:MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={(event) => console.log(item, index, event)}
            // onClick={handleClick}
            // onClick={() => { selectedIndex = index; }}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
