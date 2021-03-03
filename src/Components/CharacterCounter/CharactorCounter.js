import React, { useState } from "react";

function CharactorCounter() {
  const SIZE = 280;
  const [counter, setcounter] = useState(280);

  function countCharactor(evt) {
    setcounter(() => SIZE - evt.target.value.length);
  }
  return (
    <div>
      <textarea
        placeholder="Enter the text here!!."
        onChange={countCharactor}
        cols="50"
        maxLength="280"
      ></textarea>

      <p>{counter} charactors left</p>
    </div>
  );
}

export default CharactorCounter;
