import React, { Children } from "react";
import "./Button.css";

export default function Button({ children, onClick }) {
  // function handleClick() {
  //   console.log("button clicked");
  // }
  return <button onClick={onClick}>{children}</button>;
}
