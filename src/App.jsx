import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button/Button.jsx";

function WayToTeach() {
  return (
    <li>
      <p>
        <strong>Фильтрация</strong>Lorem..
      </p>
    </li>
  );
}

function App() {
  // let content = "press the button";
  console.log("App component rendered");
  const [content, setContent] = useState(null);

  // let tabContent = null;

  // if (content) {
  //   tabContent = <p>{content}</p>;
  // } else {
  //   tabContent = <div>"Press the button"</div>;
  // }

  function handleClick(type) {
    console.log("Button clickedd", type);
    setContent(type);
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>

          <ul>
            <WayToTeach />
            <WayToTeach />
            <WayToTeach />
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаем от других</h3>
          <Button onClick={() => handleClick("way")}>Подход</Button>
          <Button onClick={() => handleClick("ez")}>Доступность</Button>
          <Button onClick={() => handleClick("program")}>Концентрация</Button>
          {/* {content ? <p>{content}</p> : <div>"Press the button"</div>} */}
          {!content && <div>"Press the button"</div>}
          {content && <p>{content}</p>}
          {/* {tabContent} */}
        </section>
      </main>
    </>
  );
}

export default App;
