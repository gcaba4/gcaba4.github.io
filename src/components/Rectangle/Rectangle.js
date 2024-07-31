import React from "react"
import Box from "../Box/Box"

import "./Rectangle.css";

export default function Rectangle ({ id, size, boxArrays }) {

  return (
    <div key={id ?? "rectangle"} className={"rectangle"}>
      {boxArrays ?? new Array(size ?? 6).fill(0).map((x, i) => <Box key={i} id={i} />)}
    </div>
  )
};