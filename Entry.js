import { useState } from "react";

export default function Entry({ action, labelText }) {
  const [content, setContent] = useState("");
  function submit(e) {
    e.preventDefault();
    action(content);
    setContent("");
  }
  return (
    <form onSubmit={submit}>
      <p>
        <label>{labelText}</label>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
      </p>
    </form>
  );
}
