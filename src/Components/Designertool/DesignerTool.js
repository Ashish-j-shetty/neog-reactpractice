import React, { useState } from "react";

function DesignerTool() {
  const [size, setsize] = useState(14);

  return (
    <div>
      <p style={{ fontSize: `${size}px` }}>
        Change the size of this para using the buttons below.
      </p>

      <button onClick={() => setsize((size) => size + 8)}>+</button>
      <button onClick={() => setsize((size) => size - 8)}>-</button>
    </div>
  );
}

export default DesignerTool;
