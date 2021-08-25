import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "../AppState";
interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={"https://robohash.org/" + id} />
      <div>{name}</div>
      <div>{email}</div>
      <div>作者：{value.username}</div>
    </div>
  );
};

export default Robot;
