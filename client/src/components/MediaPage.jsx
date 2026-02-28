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
    fetchData();
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
    // React Router v6+ will reload the current route/page
    // have to use this because defining fetchAPI outside of use effect
    // causes errors/warnings:
    // https://github.com/facebook/react/issues/34045#issuecomment-3417993146
    // useCallback wrap?
    // seems like a common "error" that doesnt really apply/false positive
    // there is also useEffectEvent
    // looking at dealership db project, looks like try catch fixes it...
    // navigate(0);
    fetchData(); // this works just fine despite above -- false positive
  };

  return (
    <>
      <div className={styles.data}>
        {fetchedData.mediaTypes.map((mediaType, idx) => (
          <li key={idx}>{mediaType.name}</li>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input name="source" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New Media" />
        <br></br>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default MediaPage;
