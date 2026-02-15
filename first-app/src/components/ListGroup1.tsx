// import { Fragment } from "react";

import { useState } from "react";

// function ListGroup() {
//   return;
//   ## <h1></h1> - A component must return only a single element
//   <ul className="list-group">
//     <li className="list-group-item">An item</li>
//     <li className="list-group-item">A second item</li>
//     <li className="list-group-item">A third item </li>
//     <li className="list-group-item">A fourth item</li>
//     <li className="list-group-item">And a fifth item</li>
//   </ul>;
// }

function ListGroup1() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  // const handleClick = (event: MouseEvent) => console.log(event);

  // Hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // if used arr it would be represented as:
  // const arr = useState(-1);
  // arr[0]; variable (selectedIndex)
  // arr[1]; updater function

  // items = []; // Demonstrating conditional rendering

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No items found!</p>
  //       </>
  //     );

  return (
    // If u must return multiple elements, wrap them in a single parent element
    // using Ctrl+Shift+P then select "Wrap with abbreviation" and type "div".
    // Or use React Fragment to avoid adding extra nodes to the DOM.
    // Another way is to use empty tags <> </> as shorthand for React Fragment
    //  which is more concise and wouldn't require to import Fragment.
    //   <>
    <div>
      <h1>List</h1>
      {items.length === 0 ? <p>No items found!</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
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

export default ListGroup1;
