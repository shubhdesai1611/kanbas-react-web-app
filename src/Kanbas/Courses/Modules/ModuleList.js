import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { LuGripVertical } from "react-icons/lu";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { BiPlus } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const subheadingsList = Object.entries(module.sub_headings).map(
    ([subheading, items]) => {
      return {
        subheading: subheading,
        items: items,
      };
    }
  );

  const [clicked, setClick] = useState(false);
  const [id, setId] = useState(0);

  return (
    <ul className="list-group border-radius-0">
      <div className="list-group-item mb-4">
        <div className="d-flex">
          <input
            type="text"
            className="form-control w-75"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <Button
            className="btn btn-primary  ms-auto"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </Button>

          <Button
            className="btn btn-success ms-2"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </Button>
        </div>
        <div>
          <textarea
            className="form-control w-75 mt-2"
            rows={5}
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </div>
        <div className="mt-2">
          <ul>
            {subheadingsList.map(({ subheading, items }, index) => (
              <li key={index}>
                <input
                  type="text"
                  className="form-control mb-2 mt-2"
                  value={subheading}
                  onChange={(e) => {
                    const updatedSubheadingsList = [...subheadingsList];
                    updatedSubheadingsList[index].subheading = e.target.value;
                    dispatch(
                      setModule({
                        ...module,
                        sub_headings: Object.fromEntries(
                          updatedSubheadingsList.map(
                            ({ subheading, items }) => [subheading, items]
                          )
                        ),
                      })
                    );
                  }}
                />
                <ul>
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <input
                        type="text"
                        className="form-control"
                        value={item}
                        onChange={(e) => {
                          const updatedItems = [...items];
                          updatedItems[itemIndex] = e.target.value;
                          const updatedSubheadingsList = [...subheadingsList];
                          updatedSubheadingsList[index].items = updatedItems;
                          dispatch(
                            setModule({
                              ...module,
                              sub_headings: Object.fromEntries(
                                updatedSubheadingsList.map(
                                  ({ subheading, items }) => [subheading, items]
                                )
                              ),
                            })
                          );
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <ul className="list-group mb-5 border-radius-0">
            <li
              key={index}
              className="list-group-item items-list pt-0 pb-0 list-group-item-secondary"
            >
              <div className="d-flex">
                <div className="fs-4 mt-auto mb-auto me-2 d-flex align-items-center">
                  <LuGripVertical />
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setClick(!clicked);
                      setId(module._id);
                    }}
                  >
                    {module._id === id && clicked ? (
                      <AiFillCaretDown />
                    ) : (
                      <AiFillCaretRight />
                    )}
                  </span>
                </div>
                <div className="w-100">
                  <div className="d-flex">
                    <h3>{module.name}</h3>
                    <Button
                      className="btn btn-danger ms-auto"
                      onClick={() => dispatch(deleteModule(module._id))}
                    >
                      Delete
                    </Button>
                    <Button
                      className="btn btn-success ms-2"
                      onClick={() => dispatch(setModule(module))}
                    >
                      Edit
                    </Button>
                  </div>
                  <span className="d-flex">
                    <p>{module.description}</p>
                    <span className="ms-auto">
                      <IoCheckmarkCircleSharp className="ms-auto my-auto text-success fs-5" />
                      <BiPlus className="ms-2 my-auto fs-5" />
                      <HiMiniEllipsisVertical className="ms-2 my-auto fs-5" />
                    </span>
                  </span>
                </div>
              </div>
            </li>
            {clicked && module._id === id && (
              <li
                key={index}
                className="list-group-item items-list pt-0 pb-0 border-bottom-0 border-start"
              >
                {module.sub_headings &&
                  Object.entries(module.sub_headings).map(([key, value]) => (
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
                            {key !== "Slides" ? (
                              <div
                                dangerouslySetInnerHTML={{ __html: value }}
                              />
                            ) : (
                              <a
                                href={`/Kanbas/Courses/${courseId}/Home`}
                                className="text-decoration-none text-danger"
                              >
                                <BiLink className="fs-5" />
                                {value}
                              </a>
                            )}
                            <IoCheckmarkCircleSharp className="ms-auto my-auto text-success fs-5" />
                            <HiMiniEllipsisVertical className="ms-2 my-auto fs-5" />
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
              </li>
            )}
          </ul>
        ))}
    </ul>
  );
}
export default ModuleList;
