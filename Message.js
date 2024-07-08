export default function Message({ meow, fact, text1 }) {
  return (
    <div>
      <p>
        {text1} {JSON.stringify(fact)}
      </p>
      <img
        src="https://cataas.com/cat?type=small&position=center"
        alt="cat"
      ></img>
    </div>
  );
}
