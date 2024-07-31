import React from "react"

export default function Box({ id }) {

    return <div key={id} className="box" 
    style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        borderColor: 'red',
    }} />;
}