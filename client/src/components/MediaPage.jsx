import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/app.module.css";
// import axios from "axios";

function MediaPage() {
  const navigate = useNavigate();

  const [fetchedData, setFetchedData] = useState({ mediaTypes: [] });
  const [input, setInput] = useState("");

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/media");
      const data = await response.json();
      console.log(data);
      const dataNames = data.mediaTypes.filter((entry) => entry.name);
      setFetchedData({ mediaTypes: dataNames });
      // axios
      // const response = await axios.get("http://localhost:8080/api");
      // console.log(response.data);
      // setFetchedData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    // this works just fine  -- false positive
    // otherwise can put function in use effect and reload page with navigate(0),
    // but that is reload of whole page
    async function fetchDataEffect() {
      try {
        const response = await fetch("http://localhost:8080/media");
        const data = await response.json();
        console.log(data);
        const dataNames = data.mediaTypes.filter((entry) => entry.name);
        setFetchedData({ mediaTypes: dataNames });
        // axios
        // const response = await axios.get("http://localhost:8080/api");
        // console.log(response.data);
        // setFetchedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDataEffect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload (optional?)
    // Send data to backend
    await fetch("http://localhost:8080/media/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mediaType: input }),
    });
    setInput(""); // Clear input after submit
    fetchData(); 
  };

  return (
    <>
      <div className={styles.data}>
        {fetchedData.mediaTypes.map((mediaType, idx) => (
          <li key={idx}>{mediaType.name}</li>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input name="media" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New Media" />
        <br></br>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default MediaPage;
