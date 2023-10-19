import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { FaGripVertical } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmarkCircle } from "react-icons/io";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="assignment">
      <div className="row mb-1">
        <div className="col-12">
          <input
            type="text"
            placeholder="Search For Assignments"
            className="form-control w-25 ms-0 search float-start"
          />
          <Dropdown className="float-end ms-1">
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              className="toggle"
            >
              <FaEllipsisVertical className="assignment-icon" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Edit Assignment Dates
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Assignment Groups Weight
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Gradescope</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Commons Favourites 1.3
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button
            type="button"
            className="btn btn-danger assignment-button ms-1"
          >
            <AiOutlinePlus />
            Assignment
          </button>
          <button type="button" className="group-button btn btn-secondary">
            <AiOutlinePlus />
            Group
          </button>
        </div>
        <hr className="hr" />
      </div>
      <div className="list-group assignments-lists">
        <li className="list-group-item heading bg-secondary ps-1">
          <h4>
            <FaGripVertical className="float-start grip mt-2 me-4" />
            <span>Assignments for course {courseId}</span>
            <Dropdown className="float-end ms-1">
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="toggle"
              >
                <FaEllipsisVertical className="assignment-icon ellipsis" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Edit Assignment Dates
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Assignment Groups Weight
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Gradescope</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Commons Favourites 1.3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div class="float-end ms-2">
              <AiOutlinePlus />
            </div>
            <label className="border border-dark rounded-pill float-end p-1">
              40% of Total
            </label>
          </h4>
        </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item items"
          >
            <FaGripVertical className="float-start grip mt-2 me-4 ps-2 grip-for-assignment-names fs-5" />
            <FiEdit className="float-start fs-5 mt-2 text-success" />
            <span className="mt-1 fs-5 float-start ms-5">
              {assignment.title}
            </span>
            {/* <FaEllipsisVertical className="float-end fs-5 mt-2" /> */}
            <Dropdown className="float-end me-2">
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <FaEllipsisVertical />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Speed Grader</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Duplicate</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Move To</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Send To</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Copy To</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Share to Commons
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <IoMdCheckmarkCircle className="float-end fs-5 mt-2 me-2 text-success" />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
