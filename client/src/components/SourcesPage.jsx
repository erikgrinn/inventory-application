import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/app.module.css";
// import axios from "axios";

function SourcesPage() {
  const navigate = useNavigate();

  const [fetchedData, setFetchedData] = useState({ sources: [] });
  const [input, setInput] = useState("");

  const [dropdownOptions, setDropdownOptions] = useState({
    mediaTypes: [],
  });
  const [selectedMediaType, setSelectedMediaType] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/sources");
        const data = await response.json();
        console.log(data);
        setFetchedData(data);
        // axios
        // const response = await axios.get("http://localhost:8080/api");
        // console.log(response.data);
        // setFetchedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    async function fetchDropdownOptions() {
      try {
        const response = await fetch("http://localhost:8080/media");
        const mediaTypesDataObject = await response.json();
        const mediaTypesData = mediaTypesDataObject.mediaTypes;

        setDropdownOptions({
          mediaTypes: mediaTypesData,
        });
        console.log("Media Types:", mediaTypesData);
      } catch (error) {
        console.error("Error fetching dropdown options:", error);
      }
    }
    fetchData();
    fetchDropdownOptions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload (optional?)
    // Send data to backend
    await fetch("http://localhost:8080/sources/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ media_type_id: selectedMediaType, source: input }),
    });
    setInput(""); // Clear input after submit
    setSelectedMediaType("");

    // React Router v6+ will reload the current route/page
    // have to use this because defining fetchAPI outside of use effect
    // causes errors/warnings:
    // https://github.com/facebook/react/issues/34045#issuecomment-3417993146
    // useCallback wrap?
    // seems like a common "error" that doesnt really apply/false positive
    // there is also useEffectEvent
    navigate(0);
  };

  return (
    <>
      <div className={styles.data}>
        {fetchedData.sources.map((source, idx) => (
          <li key={idx}>{source.name}</li>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input name="source" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New Source" />
        <br />
        <select name="mediaType" value={selectedMediaType} onChange={(e) => setSelectedMediaType(e.target.value)}>
          <option value="">Select Media Type</option>
          {dropdownOptions.mediaTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SourcesPage;
