import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaEllipsisVertical } from "react-icons/fa6";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignReducer";

function AssignmentEditor() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignmentId } = useParams();

  const assignments = useSelector((state) => state.assignReducer.assignments);

  const newAssignment = useSelector((state) => state.assignReducer.assignment);

  const maxAssignmentId = Math.max(
    ...assignments
      .filter((assignment) => assignment.course === courseId)
      .map((assignment) => parseInt(assignment._id.slice(1), 10))
  );

  let assignment =
    assignmentId === "NewAssignment"
      ? newAssignment
      : assignments.find((assignment) => assignment._id === assignmentId);

  const [AssignmentTitle, setAssignmentTitle] = useState(`${assignment.title}`);
  const [AssignmentDescription, setAssignmentDescription] = useState(
    `${assignment.description}`
  );
  const [dueDate, setDueDate] = useState(`${assignment.dueDate}`);
  const [availableFrom, setAvailableFrom] = useState(
    `${assignment.availableFrom}`
  );
  const [until, setUntil] = useState(`${assignment.until}`);
  const [points, setPoints] = useState(`${assignment.points}`);

  const reset = {
    _id: "A1011111",
    title: "NewAssignment",
    description: "New Assignment Description",
    course: "CS101",
    points: 100,
    dueDate: "2021-01-01",
    availableFrom: "2021-01-01",
    until: "2021-01-01",
  };

  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");

    if (assignmentId === "NewAssignment") {
      const newAssignmentId = maxAssignmentId + 1;
      dispatch(
        addAssignment({
          ...assignment,
          course: courseId,
          _id: `A${newAssignmentId}`,
        })
      );
    } else {
      dispatch(
        updateAssignment({
          ...assignment,
          title: AssignmentTitle,
          description: AssignmentDescription,
          until: until,
          availableFrom: availableFrom,
          dueDate: dueDate,
          points: points,
        })
      );
    }
    dispatch(setAssignment(reset));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleInputChange = (e) => {
    setAssignmentTitle(e.target.value);
  };

  useEffect(() => {
    dispatch(setAssignment({ ...assignment, title: AssignmentTitle }));
  }, [AssignmentTitle]);

  const handleDescriptionChange = (e) => {
    setAssignmentDescription(e.target.value);
  };
  useEffect(() => {
    dispatch(
      setAssignment({ ...assignment, description: AssignmentDescription })
    );
  }, [AssignmentDescription]);

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };
  useEffect(() => {
    dispatch(setAssignment({ ...assignment, dueDate: dueDate }));
  }, [dueDate]);

  const handleAvailableFromChange = (e) => {
    setAvailableFrom(e.target.value);
  };
  useEffect(() => {
    dispatch(setAssignment({ ...assignment, availableFrom: availableFrom }));
  }, [availableFrom]);

  const handleUntilChange = (e) => {
    setUntil(e.target.value);
  };
  useEffect(() => {
    dispatch(setAssignment({ ...assignment, until: until }));
  }, [until]);

  const handlePoints = (e) => {
    setPoints(e.target.value);
  };
  useEffect(() => {
    dispatch(setAssignment({ ...assignment, points: points }));
  }, [points]);

  const inputRef = useRef();

  const handleChange = (e) => {
    inputRef.current.value = e.target.value;
  };

  return (
    <div className="ms-5">
      <div className="col ms-4">
        <div className="row">
          <div className="col">
            <button className="btn btn-light me-3 float-end">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <Dropdown className="float-end me-2">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <FaEllipsisVertical />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#"></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <label className="text-success me-3 pt-1 fs-5 float-end">
              Published
            </label>
            <IoMdCheckmarkCircle className="float-end fs-5 mt-2 me-2 text-success" />
          </div>
        </div>
      </div>
      <hr />
      <div className="row mt-5">
        <label className="ps-0" for="assignment_name">
          Assignment Name
        </label>
        <input
          type="text"
          name="assignment_name"
          id="assignment_name"
          className="form-control w-50"
          value={AssignmentTitle}
          placeholder="New Assignment"
          onChange={handleInputChange}
        />
      </div>

      <div className="row mt-5">
        <label className="ps-0" for="assignment_name">
          Assignment Description
        </label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="form-control w-50"
          onChange={handleDescriptionChange}
        >
          {AssignmentDescription}
        </textarea>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="points">
            Points
          </label>
        </div>
        <div className="col-4">
          <input
            type="number"
            id="points"
            min="0"
            max="100"
            value={points}
            className="form-control"
            onChange={handlePoints}
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <label
            className="form-label float-end text-end"
            for="assignment-group"
          >
            Assignment Group
          </label>
        </div>
        <div className="col-4">
          <select
            id="assignment-group"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="ASSIGNMENTS" selected>
              ASSIGNMENTS
            </option>
          </select>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="grade-display">
            Display Grade as
          </label>
        </div>
        <div className="col-4">
          <select
            id="grade-display"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="Percentage" selected>
              Percentage
            </option>
          </select>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="submission-type">
            Submission Type
          </label>
        </div>
        <div className="col-4 border border-secondary">
          <select
            id="submission-type"
            className="form-select mt-3 w-75"
            aria-label="Default select example"
          >
            <option value="submission-type" selected>
              {" "}
              Online{" "}
            </option>
          </select>
          <br />
          <h5>Online Entry options</h5>
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> Text Entry
          </label>
          <br />
          <label className="mt-3 form-check-label">
            <input className="form-check-input" type="checkbox" /> Website URL
          </label>
          <br />
          <label className="mt-3 form-check-label">
            <input className="form-check-input" type="checkbox" /> Media
            Recordings
          </label>
          <br />
          <label className="mt-3 form-check-label">
            <input className="form-check-input" type="checkbox" /> Student
            Annotation
          </label>
          <br />
          <label className="mt-3 mb-3 form-check-label">
            <input className="form-check-input" type="checkbox" /> File Uploads
          </label>
          <br />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <label
            className="form-label float-end text-end"
            for="submission-attempts"
          >
            Submission Attempts
          </label>
        </div>
        <div className="col-4">
          <select
            id="submission-attempts"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="Submission Attempts" selected>
              Unlimited
            </option>
          </select>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="plagiarism-review">
            Plagiarism Review
          </label>
        </div>
        <div className="col-4">
          <select
            id="plagiarism-review"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="plagiarism-review" selected>
              None
            </option>
          </select>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <label
            className="form-label float-end text-end"
            for="Group Assignment"
          >
            Group Assignment
          </label>
        </div>
        <div className="col-4">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> This is a
            group assignment
          </label>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="Peer Reviews">
            Peer Reviews
          </label>
        </div>
        <div className="col-4">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> Require Peer
            Reviews
          </label>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <label className="form-label float-end" for="Assign">
            Assign
          </label>
        </div>
        <div className="col-10">
          <div className="row border border-1 w-50">
            <div className="col-12">
              <label className="form-label mt-3">
                <h4>Assign to</h4>{" "}
              </label>
              <select
                id="AssignTo"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="Everyone" selected>
                  Everyone
                </option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label" for="Due">
                Due
              </label>
              <input
                className="form-control"
                id="Due"
                type="date"
                value={dueDate}
                onChange={handleDueDateChange}
              />
            </div>

            <div className="col-6 pe-0 mt-3">
              <label className="form-label" for="available-from">
                Available from
              </label>
              <input
                className="form-control"
                id="available-from"
                type="date"
                value={availableFrom}
                onChange={handleAvailableFromChange}
              />
            </div>

            <div className="col-6 ps-1 mt-3">
              <label className="form-label" for="until">
                Until
              </label>
              <input
                className="form-control"
                id="until"
                type="date"
                value={until}
                onChange={handleUntilChange}
              />
            </div>

            <div className="col-12 pe-0 ps-0 mt-4">
              <button className="btn btn-secondary w-100">
                <i className="fa-solid fa-plus"></i>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="row mt-2">
        <div className="col-12">
          <label>
            <input
              type="checkbox"
              name="notify"
              className="form-check-input me-2"
            />
            Notify users that this content has changed
          </label>
          <button
            onClick={handleSave}
            className="btn btn-danger ms-2 float-end"
          >
            Save
          </button>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-secondary float-end"
            onClick={() => {
              dispatch(setAssignment(reset));
            }}
          >
            Cancel
          </Link>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default AssignmentEditor;
