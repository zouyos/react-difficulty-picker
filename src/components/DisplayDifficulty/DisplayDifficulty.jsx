import style from "./style.module.css";

function DisplayDifficulty(props) {
  return (
    <div className={style.container}>
      {props.difficulty
        ? `Difficulty set to: ${props.difficulty}`
        : "No difficulty set"}
    </div>
  );
}

export default DisplayDifficulty;
