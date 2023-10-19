import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { LuGripVertical } from "react-icons/lu";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { BiPlus } from "react-icons/bi";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group border-radius-0">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <ul className="list-group mb-2 border-radius-0">
            <li
              key={index}
              className="list-group-item items-list pt-0 pb-0 list-group-item-secondary"
            >
              <div className="d-flex">
                <div className="fs-4 mt-auto mb-auto me-2">
                  <LuGripVertical />
                </div>
                <div className="">
                  <h3>{module.name}</h3>
                  <p>{module.description}</p>
                </div>
                <IoCheckmarkCircleSharp className="ms-auto my-auto text-success fs-5" />
                <BiPlus className="ms-2 my-auto fs-5" />
                <HiMiniEllipsisVertical className="ms-2 my-auto fs-5" />
              </div>
            </li>
            <li
              key={index}
              className="list-group-item items-list pt-0 pb-0 border-bottom-0 border-start"
            >
              {Object.entries(module.sub_headings).map(([key, value]) => (
                <div>
                  <span className="d-flex">
                    <LuGripVertical className="fs-5 mt-auto mb-auto me-2" />
                    <h4 className="list-group-item mb-0 border-0 ps-0">
                      {key}
                    </h4>
                    <IoCheckmarkCircleSharp className="ms-auto my-auto text-success fs-5" />
                    <HiMiniEllipsisVertical className="ms-2 my-auto fs-5" />
                  </span>
                  <span>
                    {value.map((value, index) => (
                      <span
                        key={index}
                        className="list-group-item d-flex mb-0 border-start-0 border-end-0 ps-0 me-0 pe-0"
                      >
                        <LuGripVertical className="fs-5 mt-auto mb-auto me-4" />
                        <div dangerouslySetInnerHTML={{ __html: value }} />
                        <IoCheckmarkCircleSharp className="ms-auto my-auto text-success fs-5" />
                        <HiMiniEllipsisVertical className="ms-2 my-auto fs-5" />
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </li>
          </ul>
        ))}
    </ul>
  );
}
export default ModuleList;
