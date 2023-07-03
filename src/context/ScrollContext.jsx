import { createContext, useRef, useEffect } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children, messages }) => {
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const scroll = {
    lastMessageRef,
  };

  return (
    <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>
  );
};
