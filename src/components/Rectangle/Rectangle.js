import React from "react"
import Box from "../../components/Box/box"

import "./Rectangle.css";

export default function Rectangle ({ id, size, boxArrays }) {
  size = size ?? 6
  boxArrays = boxArrays ?? new Array(size).fill(0);
  return (
    <div key={id ?? "rectangle"} className={"rectangle"}>
      {boxArrays.map((x, i) => 
        
        <Box key={i} id={i} backgroundColor={i === 0 || i === size - 1 ? "red" : undefined} />
      )}
    </div>
  )
};