import React from "react"

import "./box.css"

export default function Box({ id, backgroundColor, fixWidth, onClick, children }) {
    return <div
        key={id}
        className={`box ${fixWidth ? "fixedWidth" : ""}`}
        style={backgroundColor && {
            backgroundColor: backgroundColor
        }}
        onClick={(e) => onClick ? onClick() : console.log(id)}
        tabIndex={"0"}
    >
        {children}
    </div>;
}