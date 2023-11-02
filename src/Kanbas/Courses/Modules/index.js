import ModuleList from "./ModuleList";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import "./index.css";

function Modules() {
  return (
    <div>
      <div className="d-flex">
        <div className="col">
          <Button variant="secondary" className="float-end">
            <HiOutlineEllipsisVertical className="fs-4" />
          </Button>
          <Button variant="danger" className="float-end me-1">
            <AiOutlinePlus className="fs-5 pb-1" />
            Module
          </Button>

          <Dropdown className="publish-all-dropdown float-end me-1">
            <Dropdown.Toggle
              variant="secondary"
              id="export"
              className="publish-all-toggle show-arrow"
            >
              <IoIosCheckmarkCircleOutline className="text-warning fs-5 pb-1" />
              Publish All
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Publish All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="secondary" className="float-end me-1">
            View Progress
          </Button>
          <Button variant="secondary" className="float-end me-1">
            Collapse All
          </Button>
        </div>
      </div>
      <hr />
      <ModuleList />
    </div>
  );
}
export default Modules;
