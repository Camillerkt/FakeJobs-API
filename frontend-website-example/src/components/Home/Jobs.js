import { useContext, useState } from "react";

import { JobsContext } from "../../contexts/JobsContext";

// Pagination system example : https://github.com/bradtraversy/simple_react_pagination

import Pagination from "./Jobs/Pagination";
import DisplayJobs from "./Jobs/DisplayJobs";

const Jobs = () => {
  const jobs = useContext(JobsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Jobs">
      <DisplayJobs jobs={currentJobs} />
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={jobs.jobs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Jobs;
