import { useState, useEffect } from "react";
import styles from "../styles/app.module.css";
// import axios from "axios";

function MediaTypes() {
  // useState needs to have structure for first render
  const [fetchedData, setFetchedData] = useState({ "Media Types": [] });

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

  return (
    <>
      <div className={styles.data}>
        {fetchedData["Media Types"].map((mediaType, idx) => (
          <li key={idx}>{mediaType}</li>
        ))}
      </div>
    </>
  );
}

export default MediaTypes;
