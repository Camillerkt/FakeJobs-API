import { Link } from "react-router-dom";

const DisplayJobs = ({ jobs }) => {
  return (
    <>
      {jobs.map((job, index) => {
        return (
          <Link to={`/job/${job.id}`}>
            <div className="job" key={index}>
              <div className="left">
                <img src={job.logo} alt="company-logo" />

                <div className="job-description">
                  <h5>{job.name}</h5>
                  <h1>{job.title}</h1>
                  {job.fulltime === "true" && (
                    <div className="full-time-badge">Full time</div>
                  )}
                </div>
              </div>

              <div className="right">
                <p>
                  <label>
                    <span className="material-symbols-outlined">public</span>
                  </label>
                  {job.city}
                </p>

                <p>
                  <label>
                    <span className="material-symbols-outlined">schedule</span>
                  </label>
                  {job.date}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default DisplayJobs;
