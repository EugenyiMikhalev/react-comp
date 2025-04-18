import React, { useState } from "react";
import logo from "../../public/vite.svg";

function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      <img src={logo} alt=""></img>

      <h3>Result university</h3>

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}

export default Header;
