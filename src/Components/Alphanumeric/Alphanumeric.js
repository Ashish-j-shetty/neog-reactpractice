import React, { useState } from "react";

function Alphanumeric() {
  const [passwordCheck, setpasswordCheck] = useState({
    password: "",
    feedback: "",
  });

  function passwordValidation(evt) {
    let pattern = /^(?=.*\d)(?=.*[a-zA-Z]).{1,}$/;

    let feedback;
    if (pattern.test(evt.target.value)) {
      feedback = "Valid password";
    } else {
      feedback = "Password should contain numbers and string";
    }

    setpasswordCheck((passwordCheck) => ({
      ...passwordCheck,
      password: evt.target.value,
      feedback: feedback,
    }));
  }
  return (
    <div>
      <form>
        <label>
          password :
          <input
            type="password"
            value={passwordCheck.password}
            onChange={passwordValidation}
          />
        </label>

        {passwordCheck.feedback ? <p>{passwordCheck.feedback}</p> : ""}
      </form>
    </div>
  );
}

export default Alphanumeric;
