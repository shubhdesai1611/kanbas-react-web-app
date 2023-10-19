import Modules from "../Modules";
import "./index.css";
import { LiaFileExportSolid } from "react-icons/lia";
import { AiOutlineLogout } from "react-icons/ai";
import { BsBullseye } from "react-icons/bs";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { CiBullhorn } from "react-icons/ci";
import { GrNotification } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { AiOutlineStop } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Home() {
  return (
    <div className="container row">
      <span className="col-9">
        <Modules />
      </span>
      <span className="col-3 d-none d-xl-block">
        <h5>Course Status</h5>
        <span className="w-100 d-flex">
          <button className="btn btn-light text-dark w-100" type="button">
            <AiOutlineStop className="fs-5 pb-1" />
            Unpublish
          </button>
          <button className="btn btn-success w-100" type="button">
            <BsFillCheckCircleFill className="fs-5 pb-1 me-1" />
            Published
          </button>
        </span>
        <span>
          <ul className="list-group status_buttons mt-3 w-100">
            <li className="list-group-item list-group-item-action p-0">
              <button className="btn btn-light justify-content-start w-100">
                <a
                  href="#"
                  className="text-dark float-start text-decoration-none"
                >
                  <LiaFileExportSolid className="fs-4 me-1" />
                  Import Existing Content
                </a>
              </button>
            </li>
            <li className="list-group-item list-group-item-action p-0">
              <button className="btn btn-light w-100">
                <a
                  href="#"
                  className="text-dark float-start text-decoration-none"
                >
                  <AiOutlineLogout className="fs-4 me-1" />
                  Import From Commons
                </a>
              </button>
            </li>
            <li className="list-group-item list-group-item-action p-0">
              <button className="btn btn-light w-100">
                <a
                  href="#"
                  className="text-dark float-start text-decoration-none"
                >
                  <BsBullseye className="fs-4 me-1" />
                  Choose Home Page
                </a>
              </button>
            </li>
            <li className="list-group-item list-group-item-action p-0">
              <button className="btn btn-light w-100">
                <a
                  href="#"
                  className="text-dark float-start text-decoration-none"
                >
                  <BsFillBarChartLineFill className="fs-4 me-1" />
                  View Course Stream
                </a>
              </button>
            </li>
            <li className="list-group-item list-group-item-action p-0">
              <button className="btn btn-light w-100">
                <a
                  href="#"
                  className="text-dark float-start text-decoration-none"
                >
                  <CiBullhorn className="fs-4 me-1" />
                  New Announcement
                </a>
              </button>
            </li>
            <li className="list-group-item list-group-item-action p-0">
              <button className="btn btn-light w-100">
                <a
                  href="#"
                  className="text-dark float-start text-decoration-none"
                >
                  <BsFillBarChartLineFill className="fs-4 me-1" />
                  New Analytics
                </a>
              </button>
            </li>
            <li className="list-group-item list-group-item-action p-0">
              <button className="btn btn-light w-100">
                <a
                  href="#"
                  className="text-dark float-start text-decoration-none"
                >
                  <GrNotification className="fs-5 me-1" />
                  View Course Notifications
                </a>
              </button>
            </li>
          </ul>
        </span>
        <div className="view_calender mt-3">
          <h5>To Do</h5>
          <hr />
          <div>
            <p>Grade A1-ENV+HTML</p>
          </div>
        </div>
        <div className="view_calender mt-3">
          <h6>
            Comming Up
            <a href="#" className="float-end text-decoration-none text-danger">
              <SlCalender className="me-1 pb fs-5-1" />
              View Calender
            </a>
          </h6>
        </div>
        <hr />
        <span>
          <ul className="list-group comming_up">
            <li className="list-group-item list-group-item-action">
              <a href="#" className="text-decoration-none text-danger d-flex">
                <div>
                  <SlCalender className="me-1 pb fs-5-1 me-2" />
                </div>
                <div>Lecture CS4550.12631.202410 Sep 7 at 11:45am</div>
              </a>
            </li>
            <li className="list-group-item list-group-item-action">
              <a href="#" className="text-decoration-none text-danger d-flex">
                <div>
                  <SlCalender className="me-1 pb fs-5-1 me-2" />
                </div>
                <div>Lecture CS4550.12631.202410 Sep 11 at 11:45am</div>
              </a>
            </li>
            <li className="list-group-item list-group-item-action">
              <a href="#" className="text-decoration-none text-danger d-flex">
                <div>
                  <SlCalender className="me-1 pb fs-5-1 me-2" />
                </div>
                <div>CS5610 06 SP23 Lecture Sep 11 at 6pm</div>
              </a>
            </li>
            <li className="list-group-item list-group-item-action">
              <a href="#" className="text-decoration-none text-danger d-flex">
                <div>
                  <SlCalender className="me-1 pb fs-5-1 me-2" />
                </div>
                <div>12 more in the next week...</div>
              </a>
            </li>
          </ul>
        </span>
      </span>
    </div>
  );
}
export default Home;
