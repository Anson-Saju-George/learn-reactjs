import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup3 from "./components/ListGroup3";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* <ListGroup3 items={items} heading="Cities" /> */}
      {/* <Alert>Hello World!</Alert> */}
      {/* <Alert>Hello <span>World!</span></Alert> */}
      {visible && <Alert onClose={() => setVisible(false)}>My alert</Alert>}
      <Buttons color="secondary" onClick={() => setVisible(true)}>
        Click Me
      </Buttons>
    </div>
  );
}

export default App;
