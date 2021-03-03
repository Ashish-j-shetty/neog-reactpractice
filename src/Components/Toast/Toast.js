import React, { useState } from "react";

function ToastComponent({ toggleFunction, type }) {
  function onHide() {
    toggleFunction();
  }

  if (type === "success") {
    return (
      <div style={{ background: "green" }}>
        <p>This is a success toast message!!!</p>
        <button onClick={onHide}>Hide toast</button>
      </div>
    );
  } else if (type === "warning") {
    return (
      <div style={{ background: "yellow" }}>
        <p>This is a warning toast message!!!</p>
        <button onClick={onHide}>Hide toast</button>
      </div>
    );
  } else if (type === "error") {
    return (
      <div style={{ background: "red" }}>
        <p>This is a errror toast message!!!</p>
        <button onClick={onHide}>Hide toast</button>
      </div>
    );
  }
}

export default function Toast() {
  const [showToast, setToast] = useState({
    show: false,
    type: "",
  });

  const toggleFunction = (type = "success") => {
    setToast((showToast) => ({ ...showToast, show: !showToast.show, type }));
  };

  let showComponent;

  if (showToast.type === "success") {
    showComponent = (
      <ToastComponent toggleFunction={toggleFunction} type="success" />
    );
  } else if (showToast.type === "warning") {
    showComponent = (
      <ToastComponent toggleFunction={toggleFunction} type="warning" />
    );
  } else if (showToast.type === "error") {
    showComponent = (
      <ToastComponent toggleFunction={toggleFunction} type="error" />
    );
  }
  return (
    <div>
      {showToast.show ? (
        showComponent
      ) : (
        <React.Fragment>
          <button onClick={() => toggleFunction("success")}> Show Toast</button>
          <button onClick={() => toggleFunction("warning")}>
            {" "}
            Show warning
          </button>
          <button onClick={() => toggleFunction("error")}> Show error</button>
        </React.Fragment>
      )}
    </div>
  );
}
