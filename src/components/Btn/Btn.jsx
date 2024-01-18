//import styles from './styles.module.css';
import { useState } from "react";
import { Block } from "../Block/Block";
import { Game } from "../game/Game";

export const Btn = () => {
  const [arr, setArr] = useState([]);
  const [rgb, setRgb] = useState("");

  const array = () => {
    function color() {
      let rgb = "";
      const txt = "ABCDEF0123456789";

      for (let i = 0; i < 6; i++) {
        rgb += txt[Math.floor(Math.random() * txt.length)];
      }
      return `#${rgb}`;
    }

    const delColor = () => {
      alert("через 5 секунд пропадут цвета,кликните на понравившейся цвет");

      setTimeout(() => {
        setArr([]);
      }, 5000);
    };

    arr.length > 14 ? delColor() : setArr([...arr, color()]);
  };

  return (
    <div>
      <button onClick={array}>click</button>
      <div>
        <Block arr={arr} setRgb={setRgb} />
      </div>
      <Game rgb={rgb} />
    </div>
  );
};
