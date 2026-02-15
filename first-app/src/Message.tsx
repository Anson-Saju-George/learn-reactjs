// Pascal Casing is used for React component names
function Message() {
  // JSX: JavaScript XML
  const name = 'Anson'
  if (!name) {
    return <h1>Hello, Stranger!</h1>;
  }
  return <h1>Hello, {name}!</h1>;
}

export default Message;
