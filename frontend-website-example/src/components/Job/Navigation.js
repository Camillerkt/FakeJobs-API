import { Link } from "react-router-dom";

const Navigation = ({ jobInformations }) => {
  return (
    <div className="Navigation">
      <Link to="/home">
        <div id="back">
          <label>
            <span className="material-symbols-outlined">
              keyboard_backspace
            </span>
          </label>
          <p>Back to search</p>
        </div>
      </Link>

      <div id="application">
        <p id="apply">HOW TO APPLY</p>

        <p id="description">
          Please email a copy of your resume and online portfolio to
          <span>
            <a href={`mailto:${jobInformations.author}`}>
              {` ${jobInformations.author}`}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Navigation;
