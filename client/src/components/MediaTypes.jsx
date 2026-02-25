import { useState, useEffect } from "react";
import styles from "../styles/app.module.css";
// import axios from "axios";

function MediaTypes() {
  // useState needs to have structure for first render
  const [fetchedData, setFetchedData] = useState({ "Media Types": [] });
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchAPI() {
      // fetch
      const response = await fetch("http://localhost:8080/media");
      const data = await response.json();
      console.log(data);
      setFetchedData(data);

      // axios
      // const response = await axios.get("http://localhost:8080/api");
      // console.log(response.data);
      // setFetchedData(response.data);
    }
    fetchAPI();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload (optional?)
    // Send data to backend
    await fetch("http://localhost:8080/media/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ media_type: input }),
    });
    setInput(""); // Clear input after submit
  };

  return (
    <>
      <div className={styles.data}>
        {fetchedData["Media Types"].map((mediaType, idx) => (
          <li key={idx}>{mediaType}</li>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input name="messageText" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New Media" />
        <br></br>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default MediaTypes;
