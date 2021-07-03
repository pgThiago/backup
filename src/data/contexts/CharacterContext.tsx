import { createContext } from "react";

export const CharacterContext = createContext({} as CharacterContextTypes);

type CharacterContextTypes = {};

interface CharacterContextProviderProps {
  children: React.ReactNode;
}

export function CharacterContextProvider({
  children,
}: CharacterContextProviderProps) {
  return (
    <CharacterContext.Provider value={{}}>{children}</CharacterContext.Provider>
  );
}
