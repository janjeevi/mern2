import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello da 👋");

  const changeMessage = () => {
    setMessage("hello there 👋");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click Me</button>
    </div>
  );
}

export default App;