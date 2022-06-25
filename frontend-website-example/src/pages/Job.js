import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { JobsContext } from "../contexts/JobsContext";

import Navigation from "../components/Job/Navigation";
import JobDescription from "../components/Job/JobDescription";

const Job = () => {
  const jobs = useContext(JobsContext);
  const { id } = useParams();

  const [jobInformations, setJobInformations] = useState({});

  useEffect(() => {
    const job = jobs.jobs.find((job) => job.id === id);
    setJobInformations(job);
  }, [jobs]);

  if (jobInformations) {
    return (
      <div className="Job">
        <Navigation jobInformations={jobInformations} />
        <JobDescription jobInformations={jobInformations} />
      </div>
    );
  } else {
    return <h2>Please wait for loading...</h2>;
  }
};
export default Job;
