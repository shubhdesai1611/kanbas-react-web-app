import "./index.css";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
function Assignment5() {
  const API_BASE_LAB = process.env.REACT_APP_API_BASE_LAB;
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a
          href={`${API_BASE_LAB}/a5/welcome`}
          className="a5MainCSS list-group-item"
        >
          Welcome
        </a>
      </div>
      {/* <SimpleAPIExamples /> */}
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
