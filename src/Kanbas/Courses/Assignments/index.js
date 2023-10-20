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
              <Dropdown.Item href="#">Edit Assignment Dates</Dropdown.Item>
              <Dropdown.Item href="#">Assignment Groups Weight</Dropdown.Item>
              <Dropdown.Item href="#">Gradescope</Dropdown.Item>
              <Dropdown.Item href="#">Commons Favourites 1.3</Dropdown.Item>
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
        <li className="list-group-item heading list-group-item-secondary ps-1">
          <h4>
            <FaGripVertical className="float-start grip mt-2 me-4" />
            <span>Assignments for course {courseId}</span>
            <Dropdown className="float-end ms-1">
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="toggle"
              >
                <FaEllipsisVertical className="assignment-icon ellipsis text-dark" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Edit Assignment Dates</Dropdown.Item>
                <Dropdown.Item href="#">Assignment Groups Weight</Dropdown.Item>
                <Dropdown.Item href="#">Gradescope</Dropdown.Item>
                <Dropdown.Item href="#">Commons Favourites 1.3</Dropdown.Item>
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
            <Dropdown className="float-end me-2">
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <FaEllipsisVertical />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Edit</Dropdown.Item>
                <Dropdown.Item href="#">Speed Grader</Dropdown.Item>
                <Dropdown.Item href="#">Duplicate</Dropdown.Item>
                <Dropdown.Item href="#">Delete</Dropdown.Item>
                <Dropdown.Item href="#">Move To</Dropdown.Item>
                <Dropdown.Item href="#">Send To</Dropdown.Item>
                <Dropdown.Item href="#">Copy To</Dropdown.Item>
                <Dropdown.Item href="#">Share to Commons</Dropdown.Item>
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
