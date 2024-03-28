'use client'
import React, { useState } from "react";
import { addTask } from "./action";

const Inputfield = () => {

  const [value, setValue] = useState();
  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Enter your task here....."
        value={value}
        onChange={(e:any)=>setValue(e.target.value)}
        className="border bottom-1"
      />

    <button onClick={()=>addTask("http://127.0.0.1:8000/task/", {content: value})} className="border py-2 px-4">+</button>
    </div>
  );
};

export default Inputfield;
