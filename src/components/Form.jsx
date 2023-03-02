import { useState } from "react";

function Form({ cards, setCards }) {
  const [title, setTitle] = useState("");
  const [content, setConent] = useState("");
  const clickAddBtnHandler = (e) => {
    e.preventDefault();
    const newCards = {
      title,
      content,
      isDone: false,
      id: Math.random(),
      edit: false,
    };
    setCards([...cards, newCards]);
    setTitle("");
    setConent("");
  };
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e) => {
    setConent(e.target.value);
  };
  return (
    <form onSubmit={clickAddBtnHandler}>
      <div>
        {" "}
        제목{" "}
        <input
          required
          type="text"
          value={title}
          onChange={titleChangeHandler}
        />{" "}
        &nbsp; &nbsp; 내용{" "}
        <input
          required
          type="text"
          value={content}
          onChange={contentChangeHandler}
        />
      </div>
      <input type="submit" value="추가하기" className="add-btn" />
    </form>
  );
}

export default Form;
