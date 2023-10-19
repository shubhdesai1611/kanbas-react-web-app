import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { LuNetwork } from "react-icons/lu";
import { BsPlug } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { GoDiscussionClosed } from "react-icons/go";
import { FaBullhorn } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { BsFolder } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { BsBullseye } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { GoGear } from "react-icons/go";

const SimpleCourseNavigation = () => {
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

  const linkToIconMap = {
    Home: <AiFillHome />,
    Modules: <LuNetwork />,
    ZoomMeetings: <BsPlug />,
    Piazza: <BsPlug />,
    Assignments: <FiEdit />,
    Quizzes: <BsRocketTakeoff />,
    Grades: <FaBook />,
    People: <BsPeopleFill />,
    PanoptoVideo: <BsPlug />,
    Discussions: <GoDiscussionClosed />,
    Announcements: <FaBullhorn />,
    Pages: <RiPagesLine />,
    Files: <BsFolder />,
    Rubrics: <FaClipboardList />,
    Outcomes: <BsBullseye />,
    Collaborations: <BsCircle />,
    Syllabus: <RiPagesLine />,
    Settings: <GoGear />,
  };

  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="list-group">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item course-navigation ${
            pathname.includes(link) && "active"
          } d-flex`}
        >
          <div className="icon me-4">{linkToIconMap[link]}</div>
          <div className="text text-danger fs-4">{link}</div>
        </Link>
      ))}
    </div>
  );
};

export default SimpleCourseNavigation;
