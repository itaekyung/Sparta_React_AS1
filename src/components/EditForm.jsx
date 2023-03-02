import { useState } from "react";

function EditForm({ item, cards, setCards }) {
  const [title, setTitle] = useState(item.title);
  const [content, setConent] = useState(item.content);
  const [edit, setEdit] = useState(false);

  const updateHandler = () => {
    const cardId = item.id;
    const targetIndex = cards.findIndex((item) => item.id === cardId);
    const newTodos = [...cards];

    if (item.isDone === false) {
      newTodos.splice(targetIndex, 1, {
        id: cardId,
        title,
        content,
        isDone: false,
      });
    } else {
      newTodos.splice(targetIndex, 1, {
        id: cardId,
        title,
        content,
        isDone: true,
      });
    }
    setCards(newTodos);
  };
  return (
    <>
      <div>
        {edit ? (
          <div>
            <input
              type="text"
              value={title}
              placeholder={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              value={content}
              placeholder={content}
              onChange={(e) => {
                setConent(e.target.value);
              }}
            />{" "}
          </div>
        ) : null}
      </div>
      <button
        onClick={() => {
          setEdit((pre) => !pre);
          if (edit) {
            updateHandler();
          }
        }}
      >
        {" "}
        {edit ? "확인" : "수정"}
      </button>
    </>
  );
}

export default EditForm;
