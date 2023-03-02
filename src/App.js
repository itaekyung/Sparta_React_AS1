import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import DoneCards from "./components/DoneCards";
import WorkingCards from "./components/WorkingCards";

function App() {
  const [cards, setCards] = useState([]);
  return (
    <div className="App">
      <div className="wrap">
        <Header />
        <Form cards={cards} setCards={setCards} />
        <section>
          <WorkingCards cards={cards} setCards={setCards} />
          <DoneCards cards={cards} setCards={setCards} />
        </section>
      </div>
    </div>
  );
}

export default App;
