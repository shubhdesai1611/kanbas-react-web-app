import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const { pathname } = useLocation();
  const [newCourse, setNewCourse] = useState("");
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({});
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const addNewCourse = async () => {
    if (course.name === "") {
      alert("Please add a course name");
    } else {
      const response = await axios.post(URL, course);
      setCourses([response.data, ...courses]);
      setNewCourse("");
    }
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async (course) => {
    const response = await axios.put(`${URL}/${course._id}`, course);

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        } else {
          return c;
        }
      })
    );
    setCourse({ name: "" });
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
