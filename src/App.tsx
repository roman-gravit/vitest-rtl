import { ChangeEvent, useEffect, useState } from "react";
import { Search } from "./Search";

function App() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData("async");
    }, 500);
  }, [])

  const handleSearch = (event: ChangeEvent) => {
    const element = event.currentTarget as HTMLInputElement
    setSearch(element.value);
  }
  return (
    <>
      <h1>Hello world</h1>
      <img src='null' alt="alt text" />
      {data  &&  <div style={{color: 'red'}} className="div-data">{data}</div>}
      <button>Click me</button>
      <input type="text" placeholder="user" />
      <Search value={search} onChange={handleSearch}>
          Search:
      </Search> 
    </>
  )
}

export default App
