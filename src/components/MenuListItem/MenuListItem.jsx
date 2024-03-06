import { useState } from "react";
import style from "./style.module.css";

function MenuListItem({ onClick, difficulty, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  function getBackgroundColor() {
    if (isHovered) {
      return "#a5e9ff";
    } else if (isSelected) {
      return "#26baea";
    } else {
      return "#eff0ef";
    }
  }

  return (
    <div
      style={{ backgroundColor: getBackgroundColor() }}
      className={style.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(difficulty)}
    >
      Set to: {difficulty}
    </div>
  );
}

export default MenuListItem;
