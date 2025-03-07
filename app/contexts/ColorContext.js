"use client";
import { useState, createContext } from "react";

export const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState();
  //const [color, setColor] = useState({h: 0, s: 0, l: 0, a: 0});

  return <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>;
};

export default ColorProvider;
