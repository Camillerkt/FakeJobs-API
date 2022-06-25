import { useContext } from "react";

import { JobsContext } from "../../contexts/JobsContext";

const Filter = () => {
  const jobs = useContext(JobsContext);

  const executeFilter = (e, action) => {
    let copySelectedParams = jobs.selectedParams;

    if (action === "fulltime") {
      // if fulltime param already exists, we remove it and if not, we add it
      if (jobs.selectedParams.fulltime) {
        delete copySelectedParams.fulltime;
      } else {
        const objectWithTheNewFulltimeValue = {
          fulltime: "true",
        };

        copySelectedParams = {
          ...copySelectedParams,
          ...objectWithTheNewFulltimeValue,
        };
      }
    } else {
      // if city param already exists, we edit it and if not, we add it
      if (jobs.selectedParams.city) {
        copySelectedParams.city = e.target.value;
      } else {
        const objectWithTheNewCityValue = {
          city: e.target.value,
        };

        copySelectedParams = {
          ...copySelectedParams,
          ...objectWithTheNewCityValue,
        };
      }
    }

    jobs.setSelectedParams({ ...copySelectedParams });
  };

  return (
    <div className="Filter">
      <div className="container choice-container">
        <input
          type="checkbox"
          value="Full time"
          onChange={(e) => executeFilter(e, "fulltime")}
        />
        <label>Full time</label>
      </div>

      <div className="container">
        <label id="location-text">LOCATION</label>

        <div className="input-container">
          <label>
            <span className="material-symbols-outlined">public</span>
          </label>
          <input
            type="search"
            placeholder="Search for your favorite city..."
            required
            onChange={(e) => executeFilter(e, "city-search")}
          />
        </div>
      </div>

      <div className="container">
        <div className="choice-container">
          <input
            type="radio"
            name="city"
            value="London"
            onClick={(e) => executeFilter(e, "city-radio")}
          />
          <label>London</label>
        </div>
        <div className="choice-container">
          <input
            type="radio"
            name="city"
            value="Tokyo"
            onClick={(e) => executeFilter(e, "city-radio")}
          />
          <label>Tokyo</label>
        </div>
        <div className="choice-container">
          <input
            type="radio"
            name="city"
            value="New York"
            onClick={(e) => executeFilter(e, "city-radio")}
          />
          <label>New York</label>
        </div>
        <div className="choice-container">
          <input
            type="radio"
            name="city"
            value="Paris"
            onClick={(e) => executeFilter(e, "city-radio")}
          />
          <label>Paris</label>
        </div>
        <div className="choice-container">
          <input
            type="radio"
            name="city"
            value=""
            onClick={(e) => executeFilter(e, "city-radio")}
          />
          <label>All</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
