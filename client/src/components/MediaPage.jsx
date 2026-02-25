import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/app.module.css";
// import axios from "axios";

function MediaPage() {
  const [fetchedData, setFetchedData] = useState({ "Media Types": [] });
  const [input, setInput] = useState("");

  const navigate = useNavigate();

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
    // React Router v6+ will reload the current route/page
    // have to use this because defining fetchAPI outside of use effect
    //  causes errors/warnings:
    //  https://www.reddit.com/r/react/comments/1oifd5o/calling_setstate_synchronously_within_an_effect/
    // useCallback wrap?
    // seems like a common "error" that doesnt really apply/false positive
    navigate(0);
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

export default MediaPage;
