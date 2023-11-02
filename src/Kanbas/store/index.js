import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignReducer from "../Courses/Assignments/assignReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignReducer,
  },
});

export default store;
