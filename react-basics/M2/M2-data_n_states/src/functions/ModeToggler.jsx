function ModeToggler() {
  let darkModeOn = false;
  const darkMode = <h1>Dark Mode is On</h1>;
  const lightMode = <h1>Light Mode is On</h1>;

  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      console.log("Dark mode is on");
    } else {
      console.log("Light mode is on");
    }
  }

  return (
    <>
      {darkModeOn ? darkMode : lightMode}
      <p>The h1 doesn't change when toggling mode. This is because React doesn't re-render the component when state changes
        as it isn't using React's state management system.</p>
      <button onClick={handleClick}>Toggle Mode</button>
    </>
  );
}

export default ModeToggler;
