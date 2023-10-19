import db from "../../Database";
import { useParams } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import { FaGear } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import { LiaFileImportSolid } from "react-icons/lia";
import { FiFilter } from "react-icons/fi";
import "./index.css";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <div className="d-flex mb-5">
        <div className="col-12">
          <Button variant="secondary" className="float-end pt-1 pb-2">
            <FaGear className="fs-6 text-black" />
          </Button>
          <Dropdown className="export-dropdown float-end me-2">
            <Dropdown.Toggle
              variant="secondary"
              id="export"
              className="export-toggle show-arrow"
            >
              <IoExitOutline className="fs-4 pt-1 rotate-180" />
              Export
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Export</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="secondary" className="float-end me-2 pt-1 pb-2">
            <LiaFileImportSolid className="fs-4 rotate-180" />
            Import
          </Button>

          <Dropdown className="gradebook-dropdown float-start">
            <Dropdown.Toggle
              variant=""
              id="gradebook"
              className="gradebook-toggle show-arrow fs-5"
            >
              Gradebook
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">GradeBook</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div class="col-12 mt-2 mb-2">
        <div class="row">
          <div class="col-6">
            <h5>Student Names</h5>
          </div>

          <div class="col-6">
            <h5>Assignment Names</h5>
          </div>

          <div class="col-6">
            <input
              class="form-control"
              type="text"
              name="StudentName"
              placeholder="Search Students"
              title="Search using name of the students"
            />
          </div>

          <div class="col-6">
            <input
              class="form-control"
              type="text"
              name="AssignmentName"
              placeholder="Search Assignments"
              title="Search using name of the assignments"
            />
          </div>
        </div>
      </div>

      <Button variant="secondary" className="mb-2 me-2 pt-1 pb-2">
        <FiFilter className="fs-6" />
        Apply Filters
      </Button>

      <div className="table-responsive mt-2">
        <table className="table table-striped table-bordered align-middle text-center fixed-width-table">
          <thead className="border">
            <th className="fs-5">Student Name</th>
            {assignments.map((assignment) => (
              <th className="border fs-5">{assignment.title}</th>
            ))}
          </thead>

          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
