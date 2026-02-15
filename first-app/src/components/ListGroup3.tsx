// import { Fragment } from "react";

import { useState } from "react";

// { items: [], heading: string}
interface Props {
  items: string[]; // array of strings
  heading: string; // heading string
}



function ListGroup3(props: Props) {

  // Hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    //   <>
    <div className="list-group">
      <h1>{props.heading}</h1>
      {props.items.length === 0 ? <p>No items found!</p> : null}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
  //   </>;
}

export default ListGroup3;
