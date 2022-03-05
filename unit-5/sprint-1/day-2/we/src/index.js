// let ele = document.createElement("h1")
// ele.innerText = " hi sheelu"
//  document.getElementById("root").append(ele)
import "./css.css"
import React from "react"
import reactDom from "react-dom"

// let ele = React.createElement("h1",{className:"color mar"},"hi sheelu",
// React.createElement("h5",{},"happy to see yoy")
// )

reactDom.render(
    <div className="color">
        <h1>enter your name</h1>,
        <input type="text"></input>,
        <h1>enter number</h1>,
        <input type="number"></input>
        </div>,
    document.getElementById("root")
)

