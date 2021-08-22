import React from "react";
import styles from "./Robot.module.css";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={"https://robohash.org/" + id} />
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};

export default Robot;
