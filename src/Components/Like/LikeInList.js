import React, { useState } from "react";

export default function LikeInList() {
  const [list, setList] = useState([
    { id: 1, title: "Js", like: false },
    { id: 2, title: "Node", like: false },
    { id: 3, title: "npm", like: false },
    { id: 4, title: "babel", like: false },
    { id: 5, title: "react", like: false },
    { id: 6, title: "css", like: false },
  ]);

  function like(id) {
    let sampleList = [...list];
    sampleList.map((item) => {
      if (item.id === id) item.like = !item.like;
      return item;
    });

    setList(sampleList);
  }

  return (
    <div>
      <h3>List Items </h3>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {item.title}{" "}
              <button onClick={() => like(item.id)}>
                {item.like ? "Unlike" : "Like"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
