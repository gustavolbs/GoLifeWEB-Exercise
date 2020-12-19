import { createContext } from "react";

export const defaultTitle = "";

interface TitleContext {
  title: string;
  setTitle: (prev?: any) => void | undefined;
}

const titleContext = createContext<TitleContext>({
  title: defaultTitle,
  setTitle: () => {
    return undefined;
  },
});

export default titleContext;
