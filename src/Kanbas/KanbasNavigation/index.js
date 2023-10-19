import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FiClock } from "react-icons/fi";
import { FaNetworkWired } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaRegCircleQuestion } from "react-icons/fa6";
import NeuLogo from "../Images/NeuLogo.png";
import "./index.css";
function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
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
  const { pathname } = useLocation();
  return (
    <div className="list-group kanbas d-none d-lg-block">
      <li className="list-group-item logo">
        <img src={NeuLogo} alt="Neu Logo" className="neu-logo" />
      </li>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          <div className="icon">{linkToIconMap[link]}</div>
          <div className="text">{link}</div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
