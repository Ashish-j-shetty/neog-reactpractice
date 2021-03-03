import React, { useState } from "react";

export const DisableButton = () => {
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  let disabled =
    password.password === password.confirmPassword ? "" : "disabled";
  return (
    <div>
      <h5>Disable button example</h5>

      <span>password</span>
      <input
        type="password"
        value={password.password}
        onChange={(evt) =>
          setPassword({ ...password, password: evt.target.value })
        }
      />
      <span>confirm password </span>
      <input
        type="password"
        value={password.confirmPassword}
        onChange={(evt) =>
          setPassword({ ...password, confirmPassword: evt.target.value })
        }
      />

      <button disabled={disabled}>Submit</button>
    </div>
  );
};
