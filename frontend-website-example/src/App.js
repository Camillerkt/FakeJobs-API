import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { JobsContext } from "./contexts/JobsContext";

import Home from "./pages/Home";
import Job from "./pages/Job";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const API = "https://apis.camillerakoto.fr/fakejobs";
  const [selectedParams, setSelectedParams] = useState({});
  const [jobs, setJobs] = useState([]);

  // will be executed every time the user select a new parameter for a search
  useEffect(() => {
    const getAllJobs = async () => {
      // we get all params passed in the selectedParams object and put them in the request URL
      let requestURL = "/jobs";
      if (Object.keys(selectedParams).length > 0) {
        for (let key in selectedParams) {
          // if the key is the first of selectedParams put ? in the URL, else put &
          if (key === Object.keys(selectedParams)[0]) {
            requestURL += `?${key}=${selectedParams[key]}`;
          } else {
            requestURL += `&${key}=${selectedParams[key]}`;
          }
        }
      }

      // we execute the request and get the datas
      const response = await axios.get(API + requestURL);
      setJobs(response.data);
    };

    getAllJobs();
  }, [selectedParams]);

  return (
    <JobsContext.Provider
      value={{ jobs, selectedParams, setJobs, setSelectedParams }}
    >
      <h1 id="logo">
        <span>Fakejobs</span> Platform
      </h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/job/:id" element={<Job />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer>
        A{" "}
        <a
          href="https://devchallenges.io/challenges/TtUjDt19eIHxNQ4n5jps"
          target="_blank"
          rel="noreferrer"
        >
          DevChallenge
        </a>{" "}
        made at 🏠 by{" "}
        <a href="https://camillerakoto.fr" target="_blank" rel="noreferrer">
          Camille Rakotoarisoa
        </a>
      </footer>
    </JobsContext.Provider>
  );
};

export default App;
