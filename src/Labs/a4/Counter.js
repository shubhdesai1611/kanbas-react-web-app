import React, { useState } from "react";
import { Button } from "react-bootstrap";
function Counter() {
  const [count, setCount] = useState(7);

  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <Button
        className="btn btn-success me-2"
        onClick={() => setCount(count + 1)}
      >
        Up
      </Button>
      <Button className="btn btn-danger" onClick={() => setCount(count - 1)}>
        Down
      </Button>
    </div>
  );
}
export default Counter;
