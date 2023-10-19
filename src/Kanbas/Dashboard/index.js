import { Link } from "react-router-dom";
import db from "../Database";
import Card from "react-bootstrap/Card";
import "./index.css";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";
function Dashboard() {
  const courses = db.courses;
  const imgStyle = {
    backgroundColor: "purple",
    border: "none",
    height: "130px",
    width: "100%",
  };
  return (
    <div className="dashboard">
      <h1 className="text-muted mt-2">Dashboard</h1>
      <hr />
      <div className="container">
        <h2>Published Courses (24)</h2>
        <hr />
        <div className="list-group d-flex flex-row flex-wrap w-100">
          {courses.map((course) => (
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item bg-white border border-0"
            >
              <Card
                className="card-layout d-flex flex-column"
                style={{ width: "260px", height: "20rem" }}
              >
                <Card.Header variant="top" style={imgStyle}>
                  <HiMiniEllipsisVertical className="ellipsis-icon" />{" "}
                </Card.Header>
                <Card.Body className="card-body">
                  <Card.Title className="text-primary">{`${course.number} 01 ${course.name}`}</Card.Title>
                  <Card.Text className="text-muted">
                    {`${course.number}.12631.102024`}
                    <br />
                    {` 202410_Fall 2024 Semester`}
                    <br />
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer">
                  <FaRegEdit className="card-bottom-icon float-start" />
                </Card.Footer>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
