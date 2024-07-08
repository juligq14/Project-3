import "./styles.css";
import Title from "./Title";
import Entry from "./Entry";
import Message from "./Message";
import { useState, useEffect } from "react";

export default function App() {
  const [meow, setMeow] = useState("");
  const [fact, setFact] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchFact = () => {
      fetch("https://meowfacts.herokuapp.com/")
        .then((r) => r.json())
        .then((data) => setFact(data.data[0]))
        .catch((e) => setFact("Error Fetching data"));
    };

    const fetchCatImage = () => {
      fetch("https://cataas.com/cat?type=small&position=center")
        .then((r) => r.json())
        .then((data) => setImage(data))
        .catch((error) => setImage(error));
    };

    fetchFact();
    fetchCatImage();
  }, [meow]);

  return (
    <div className="App">
      <Title text="Meow" />
      <Entry action={setMeow} labelText="Enter meow for a random cat fact: " />
      <Message meow={meow} fact={fact} text1="Fact: " />

      <div className="footer">
        Project 3 | Webb Apps Development Summer 2024 |
        <a href="https://github.com/juligq14"> Github juligq14 </a>
      </div>

      <div className="right">
        <img src="cat.jpg" />
      </div>
    </div>
  );
}
