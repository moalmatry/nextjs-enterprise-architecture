"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from "react";

const PostContext = createContext<
  | {
      mute: boolean;
      setMute: Dispatch<SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [mute, setMute] = useState<boolean>(true);
  return (
    <PostContext.Provider value={{ mute, setMute }}>
      {children}
    </PostContext.Provider>
  );
};

const useAudio = () => {
  const context = useContext(PostContext);
  if (context === undefined) throw new Error(`Context used outside provider`);

  return context;
};

export { AudioProvider, useAudio };
