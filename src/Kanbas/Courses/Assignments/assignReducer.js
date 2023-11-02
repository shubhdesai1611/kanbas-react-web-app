import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: {
    _id: "A101111",
    title: "NewAssignment",
    description: "New Description",
    course: "CS101",
    points: 100,
    dueDate: "2021-01-01",
    availableFrom: "2021-01-01",
    until: "2021-01-01",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [{ ...action.payload }, ...state.assignments];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      console.log(action.payload);
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return {
            ...action.payload,
          };
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
