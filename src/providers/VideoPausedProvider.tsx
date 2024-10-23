"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from "react";

const VideoPausedContext = createContext<
  | {
      isPaused: boolean;
      setIsPaused: Dispatch<SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

const VideoPausedProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  return (
    <VideoPausedContext.Provider value={{ isPaused, setIsPaused }}>
      {children}
    </VideoPausedContext.Provider>
  );
};

const useVideoPaused = () => {
  const context = useContext(VideoPausedContext);
  if (context === undefined) throw new Error(`Context used outside provider`);

  return context;
};

export { VideoPausedProvider, useVideoPaused };
