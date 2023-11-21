import db from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useState, useEffect } from "react";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import SimpleKanbas from "./SimpleKanbas";
import SimpleCourseNavigation from "./SimpleCourseNavigation/SimpleCourseNavigation";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Button } from "react-bootstrap";
import "./index.css";
import { HiMenu } from "react-icons/hi";
import { LuGlasses } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";
import CloseButton from "react-bootstrap/CloseButton";
import { useSelector } from "react-redux";
import axios from "axios";

function Courses({ courses }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const path = pathname.split("/");
  let lastPage;
  let navigate = useNavigate();

  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const [course, setCourse] = useState({});
  //const course = courses.find((course) => course._id === courseId);
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const clickingMenu = () => {
    navigate(`/Kanbas/Courses/${course._id}/SimpleKanbas`);
  };

  const [breadcrum_view, setBreadcrumView] = useState("");

  useEffect(() => {
    const newBreadcrumView =
      pathname.includes("SimpleKanbas") ||
      pathname.includes("SimpleCourseNavigation")
        ? "d-none"
        : "d-none d-lg-block";

    setBreadcrumView(newBreadcrumView);
  }, [pathname]);

  const toSimpleCourseNavigation = () => {
    navigate(`/Kanbas/Courses/${course._id}/SimpleCourseNavigation`);
  };

  const backFromSimpleCourseNavigation = () => {
    navigate(-1);
  };

  const [simpleCourseNavigationBreadcrum, setSimpleCourseNavigationBreadcrum] =
    useState("");

  useEffect(() => {
    const newsimpleCourseNavigationBreadcrumView = pathname.includes(
      "SimpleCourseNavigation"
    )
      ? "d-block"
      : "d-block d-lg-none";

    setSimpleCourseNavigationBreadcrum(newsimpleCourseNavigationBreadcrumView);
  }, [pathname]);

  const reducerAssignments = useSelector(
    (state) => state.assignReducer.assignments
  );

  return (
    <div>
      {/* View till large */}
      <div
        className={`row fs-4 ps-0 pb-0 ${simpleCourseNavigationBreadcrum} mb-2`}
      >
        {!pathname.includes("SimpleKanbas") && (
          <div className="col-12 text-center text-white bg-dark pt-4 pb-4 fs-4 align-middle">
            {!pathname.includes("SimpleCourseNavigation") ? (
              <AiOutlineDown
                className="float-end fs-4 chevron-icon"
                onClick={toSimpleCourseNavigation}
              />
            ) : (
              <CloseButton
                className="float-end fs-4 close-icon"
                onClick={backFromSimpleCourseNavigation}
              />
            )}
            <GiHamburgerMenu
              className="menu-icon-course float-start mt-1"
              onClick={clickingMenu}
            />
            <LuGlasses className="float-end mt-1 me-3" />
            <div>
              <u>{course.number}.12631.202410 Modules</u>
            </div>
          </div>
        )}
      </div>
      {/* View After Large */}
      <Breadcrumb className={`breadcrum ${breadcrum_view}`}>
        <HiMenu className="menu-icon" />
        <Breadcrumb.Item
          className="breadcrum-items text-danger"
          href={`#/Kanbas/Courses/${course._id}/Home`}
        >
          {`${course.number} 01 ${course.name}`}
        </Breadcrumb.Item>
        {path.slice(4).map((page, index) => {
          const link =
            page !== path[path.length - 1]
              ? `#${path.slice(0, index + 5).join("/")}`
              : "";

          lastPage = link === "" ? "text-muted" : "text-danger";

          const isAssignment = reducerAssignments.find(
            (assignment) => assignment._id === page
          );
          page = isAssignment ? isAssignment.title : page;

          return (
            <Breadcrumb.Item
              key={index}
              className={`breadcrum-item breadcrum-items ${lastPage}`}
              href={link}
            >
              {page}
            </Breadcrumb.Item>
          );
        })}
        <Button variant="secondary" className="mt-2 ms-auto">
          <LuGlasses className="mb-1" /> Student View
        </Button>
      </Breadcrumb>
      <hr className={`hr ${breadcrum_view}`} />
      <div className="d-flex">
        <CourseNavigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="SimpleKanbas" element={<SimpleKanbas />} />
            <Route
              path="SimpleCourseNavigation"
              element={<SimpleCourseNavigation />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
