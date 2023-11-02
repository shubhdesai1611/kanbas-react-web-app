import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const { pathname } = useLocation();
  const [newCourse, setNewCourse] = useState("");
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: newCourse,
    number: "NewNumber",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    if (course.name === "") {
      alert("Please add a course name");
    } else {
      setCourses([
        ...courses,
        { ...course, _id: new Date().getTime().toString() },
      ]);
      console.log(course);
      setNewCourse("");
    }
  };

  useEffect(() => {
    console.log("Course:", course);
    console.log("Courses:", courses);
  }, [courses]);

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        {!pathname.includes("SimpleKanbas") &&
          !pathname.includes("SimpleCourseNavigation") && (
            <KanbasNavigation className="wd-bg-black" />
          )}

        <div className="container actual-content courses ps-0">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  setCourses={setCourses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  newCourse={newCourse}
                  setNewCourse={setNewCourse}
                />
              }
            />
            <Route path="Courses/*" element={<h1>Courses</h1>} />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
