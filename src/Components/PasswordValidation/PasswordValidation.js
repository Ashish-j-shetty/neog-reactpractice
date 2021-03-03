import React, { useState } from "react";

const PasswordValidation = () => {
  const [password, setpassword] = useState({
    password: "",
    confirmPassword: "",
    feedback: "",
  });

  return (
    <div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password.password}
          onChange={(evt) =>
            setpassword((password) => ({
              ...password,
              password: evt.target.value,
            }))
          }
        />
      </div>
      <div>
        <lable>Confirm password:</lable>
        <input
          type="password"
          value={password.confirmPassword}
          onChange={(evt) =>
            setpassword((password) => ({
              ...password,
              confirmPassword: evt.target.value,
            }))
          }
        />
      </div>

      <button
        onClick={() => {
          let feedback;
          if (password.password === password.confirmPassword) {
            feedback = "Password and confirm password matched";
          } else {
            feedback = "Password and confirm password do not match";
          }

          setpassword((password) => ({ ...password, feedback }));
        }}
      >
        Save password
      </button>

      {password.feedback ? <p>{password.feedback}</p> : ""}
    </div>
  );
};

export default PasswordValidation;
