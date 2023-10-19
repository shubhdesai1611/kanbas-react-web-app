import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "ZoomMeetings",
    "Piazza",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "PanoptoVideo",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    !pathname.includes("SimpleKanbas") &&
    !pathname.includes("SimpleCourseNavigation") && (
      <div className="list-group main-div d-none d-lg-block">
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item course-navigation ${
              pathname.includes(link) && "active"
            }`}
          >
            {link}
          </Link>
        ))}
      </div>
    )
  );
}

export default CourseNavigation;
