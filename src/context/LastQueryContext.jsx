import { createContext, useContext, useState } from "react";

const LastQueryContext = createContext();

export function LastQueryProvider({ children }) {
  const [lastQuery, setLastQuery] = useState("");

  return (
    <LastQueryContext.Provider value={{ lastQuery, setLastQuery }}>
      {children}
    </LastQueryContext.Provider>
  );
}
export function useLastQuery() {
  const context = useContext(LastQueryContext);
  if (!context) {
    throw new Error("useLastQuery must be used within a LastQueryProvider");
  }
  return context;
}
