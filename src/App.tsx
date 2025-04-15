import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData("async");
    }, 500);
  }, [])

  return (
    <>
      <h1>Hello world</h1>
      <img src='null' alt="alt text" />
      {data  &&  <div style={{color: 'red'}} className="div-data">{data}</div>}
      <button>Click me</button>
      <input type="text" placeholder="user" />
    </>
  )
}

export default App
