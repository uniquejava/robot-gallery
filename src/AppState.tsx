import React, { useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

const defaultContextValue: AppStateValue = {
  username: "阿西莱福特",
  shoppingCart: { items: [] },
};

export const appContext = React.createContext(defaultContextValue);

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue);
  return <appContext.Provider value={state}>{props.children}</appContext.Provider>;
};
