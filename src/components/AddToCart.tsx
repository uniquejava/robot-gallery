import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  // 可以返回匿名的类组件
  // return class extends React.Component {};

  // 或者返回匿名的函数式组件
  return (props) => {
    // 此处添加业务逻辑的处理代码
    // ...
    const setState = useContext(appSetStateContext);

    const addToCart = (id, name) => {
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

    return <ChildComponent {...props} addToCart={addToCart} />;
  };
};

export default withAddToCart;
