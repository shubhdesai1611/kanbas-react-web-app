import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvents";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import TodoList from "./ReduxExamples/todos/TodoList";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return (
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples />
      <TodoList />

      <PassingFunctions theFunction={sayHello} />
      <Add a={1} b={2} />
      <ClickEvent />
      <PassingDataOnEvent />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
    </>
  );
};
export default Assignment4;
