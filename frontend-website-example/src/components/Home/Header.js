import { useContext } from "react";

import { JobsContext } from "../../contexts/JobsContext";

const Header = () => {
  const jobs = useContext(JobsContext);

  const searchJobs = (e) => {
    e.preventDefault();

    let copySelectedParams = jobs.selectedParams;

    // if title param already exists, we edit it and if not, we add it
    if (jobs.selectedParams.title) {
      copySelectedParams.title = e.target.search.value;
    } else {
      const objectWithTheNewTitle = {
        title: e.target.search.value,
      };

      copySelectedParams = {
        ...copySelectedParams,
        ...objectWithTheNewTitle,
      };
    }

    jobs.setSelectedParams({ ...copySelectedParams });
  };

  return (
    <form className="Header" onSubmit={searchJobs}>
      <div className="input-container">
        <label>
          <span className="material-symbols-outlined">work</span>
        </label>
        <input
          type="search"
          placeholder="Search by ad title quickly and easily..."
          name="search"
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Header;
