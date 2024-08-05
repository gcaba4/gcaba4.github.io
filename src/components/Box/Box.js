import React from "react"

import "./box.css"

export default function Box({ id, backgroundColor }) {

    return <div
        key={id}
        className="box"
        style={backgroundColor && {
            backgroundColor: backgroundColor
        }}
        onClick={(e) => console.log(id)}
    />;
}