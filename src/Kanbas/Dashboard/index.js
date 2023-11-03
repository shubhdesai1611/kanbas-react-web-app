import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import Card from "react-bootstrap/Card";
import "./index.css";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "react-bootstrap";
import CourseEditForm from "./courseEditForm";
function Dashboard({
  courses,
  setCourses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  newCourse,
  setNewCourse,
}) {
  const imgStyle = {
    backgroundColor: "purple",
    border: "none",
    height: "130px",
    width: "100%",
  };

  const handleCourseAdd = (e) => {
    setNewCourse((course["name"] = e.target.value));
  };

  const [editing, setEditing] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const editCourse = (courseId) => {
    const courseToEdit = courses.find((course) => course._id === courseId);
    setSelectedCourse(courseToEdit);
    setEditing(true);
  };

  return (
    <div className="dashboard">
      <h1 className="text-muted mt-2">Dashboard</h1>
      <hr />
      <div className="container">
        {editing ? (
          <CourseEditForm
            selectedCourse={selectedCourse}
            setEditing={setEditing}
            editCourse={(editCourse) => {
              setCourses((prevCourses) =>
                prevCourses.map((course) =>
                  course._id === editCourse._id ? editCourse : course
                )
              );
            }}
          />
        ) : (
          <>
            <h2>Published Courses ({courses.length})</h2>
            <hr />
            <div className="d-flex w-50 mt-5 border border-1 p-2">
              <input
                type="text"
                className="form-control float-start w-25"
                value={newCourse}
                placeholder="New Course"
                onChange={handleCourseAdd}
              />
              <div className="ms-auto">
                <Button className="btn btn-success me-2" onClick={addNewCourse}>
                  Add
                </Button>
                <Button className="btn btn-primary" onClick={updateCourse}>
                  Update
                </Button>
              </div>
            </div>
            <div className="list-group w-50 mt-2 border border-1">
              {courses.map((course) => (
                <div className="d-flex border border-1">
                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="list-group-item dashboard-item border border-0 float-start"
                  >
                    {course.name}
                  </Link>
                  <div className="p-2 ms-auto">
                    <Button
                      className="btn btn-warning me-2"
                      onClick={(event) => {
                        event.preventDefault();
                        editCourse(course._id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {/* //     <div className="list-group d-flex flex-row flex-wrap w-100">
    //       {courses.map((course) => (
    //         <Link
    //           key={course._id}
    //           to={`/Kanbas/Courses/${course._id}`}
    //           className="list-group-item bg-white border border-0"
    //         >
    //           <Card
    //             className="card-layout d-flex flex-column"
    //             style={{ width: "260px", height: "20rem" }}
    //           >
    //             <Card.Header variant="top" style={imgStyle}>
    //               <HiMiniEllipsisVertical className="ellipsis-icon" />{" "}
    //             </Card.Header>
    //             <Card.Body className="card-body">
    //               <Card.Title className="text-primary">{`${course.number} 01 ${course.name}`}</Card.Title>
    //               <Card.Text className="text-muted">
    //                 {`${course.number}.12631.102024`}
    //                 <br />
    //                 {` 202410_Fall 2024 Semester`}
    //                 <br />
    //               </Card.Text>
    //             </Card.Body>
    //             <Card.Footer className="card-footer">
    //               <FaRegEdit className="card-bottom-icon float-start" />
    //             </Card.Footer>
    //           </Card>
    //         </Link>
    //       ))}
    //     </div> */}
          </>
        )}
      </div>
    </div>
  );
}
export default Dashboard;
