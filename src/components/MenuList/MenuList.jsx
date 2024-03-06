import MenuListItem from "../MenuListItem/MenuListItem";
import style from "./style.module.css";
import { DIFFICULTIES } from "./data";

function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={style.container}>
      {DIFFICULTIES.map((item) => {
        //code
        return (
          <MenuListItem
            onClick={onItemClick}
            difficulty={item}
            isSelected={difficulty === item}
          />
        );
      })}
    </div>
  );
}

export default MenuList;
