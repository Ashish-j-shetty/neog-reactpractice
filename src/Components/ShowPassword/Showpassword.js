import React, { useState } from "react";

function Showpassword() {
  const [isShow, setShow] = useState(false);
  return (
    <div>
      <span>Enter passowrd</span> <input type={isShow ? "text" : "password"} />
      <button onClick={() => setShow(!isShow)}>
        {isShow ? "Hide password" : "Show password"}
      </button>
    </div>
  );
}

export default Showpassword;
