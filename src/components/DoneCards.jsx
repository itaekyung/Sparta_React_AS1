import { useState } from "react";
import EditForm from "./EditForm";

function DoneCards({ cards, setCards }) {
  const clickRemoveBtnHandler = (id) => {
    const newCards = cards.filter((item) => {
      return item.id !== id;
    });
    setCards(newCards);
  };
  const clickMoveBtnHandler = (id) => {
    const newCards = cards.map((item) => {
      return item.id == id ? { ...item, isDone: !item.isDone } : item;
    });
    setCards(newCards);
  };
  return (
    <div>
      <h1> Done..!🎉</h1>
      <div className="wrap-cards">
        {cards.map((item) => {
          if (item.isDone === true)
            return (
              <article key={item.id}>
                <h2>{item.title}</h2>
                <h3>{item.content}</h3>
                <div className="btn-box">
                  <button
                    className="remove-btn"
                    onClick={() => {
                      clickRemoveBtnHandler(item.id);
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    className="move-btn"
                    onClick={() => {
                      clickMoveBtnHandler(item.id);
                    }}
                  >
                    취소
                  </button>
                  <EditForm item={item} cards={cards} setCards={setCards} />
                </div>
              </article>
            );
        })}
      </div>
    </div>
  );
}
export default DoneCards;
