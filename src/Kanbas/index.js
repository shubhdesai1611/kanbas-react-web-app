import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";

function Kanbas() {
  const { pathname } = useLocation();

  return (
    <div className="d-flex">
      {!pathname.includes("SimpleKanbas") &&
        !pathname.includes("SimpleCourseNavigation") && (
          <KanbasNavigation className="wd-bg-black" />
        )}

      <div className="container actual-content courses ps-0">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/*" element={<h1>Courses</h1>} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
