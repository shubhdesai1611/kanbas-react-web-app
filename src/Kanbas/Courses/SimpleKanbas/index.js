import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FiClock } from "react-icons/fi";
import { FaNetworkWired } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa";
import CloseButton from "react-bootstrap/CloseButton";

const SimpleKanbas = () => {
  const links = [
    "Dashboard",
    "Account",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiUserCircle className="user-icon" />,
    Dashboard: <RiDashboard3Fill className="icon" />,
    Courses: <FaBook className="icon" />,
    Calendar: <SlCalender className="icon" />,
    Inbox: <SlEnvolopeLetter />,
    History: <FiClock />,
    Studio: <FaNetworkWired />,
    Commons: <BsFillArrowRightCircleFill />,
    Help: <FaRegCircleQuestion />,
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="list-group border border-2 mt-5">
      <div className="list-group-item border-0 fs-5 mb-5">
        <CloseButton className="float-end" onClick={goBack} />
      </div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item bg-white border-0 d-flex`}
        >
          <div className="icon me-4">{linkToIconMap[link]}</div>
          <div className="text text-danger fs-4">{link}</div>
          <div className="ms-auto fs-5 text-danger">
            <FaGreaterThan />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimpleKanbas;
