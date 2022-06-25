const JobDescription = ({ jobInformations }) => {
  return (
    <div className="JobDescription">
      <header>
        <div className="main-information">
          <h1>{jobInformations.title}</h1>
          {jobInformations.fulltime === "true" && (
            <div className="full-time-badge">
              <p>Full time</p>
            </div>
          )}
        </div>

        <p className="date">
          <label>
            <span className="material-symbols-outlined">schedule</span>
          </label>
          {jobInformations.date}
        </p>

        <div className="brand">
          <img src={jobInformations.logo} alt="brand-logo" />

          <div className="brand-infos">
            <h4>{jobInformations.name}</h4>
            <p>
              <label>
                <span className="material-symbols-outlined">public</span>
              </label>
              {jobInformations.city}
            </p>
          </div>
        </div>
      </header>

      <div className="content">
        <p>{jobInformations.content}</p>
      </div>
    </div>
  );
};

export default JobDescription;
