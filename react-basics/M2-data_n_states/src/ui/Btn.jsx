export default function Btn() {
  const clickHandler = () => {
    console.log("Button clicked");
  };
  return <button id="first-btn" onClick={clickHandler}>Click me</button>;
}


