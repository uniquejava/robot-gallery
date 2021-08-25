import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext, appSetStateContext } from "../AppState";
interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext);

  const addToCart = () => {
    if (setState) {
      setState((prevState) => {
        return {
          ...prevState,
          shoppingCart: {
            items: [...prevState.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={"https://robohash.org/" + id} />
      <div>{name}</div>
      <div>{email}</div>
      <div>作者：{value.username}</div>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  );
};

export default Robot;
