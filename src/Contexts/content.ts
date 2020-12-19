import { createContext } from "react";

export const defaultContent = [
  {
    type: "",
    title: "",
    properties: {
      categories: [""],
    },
  },
];

interface ContentContext {
  state: typeof defaultContent;
  setState: (prev?: any) => void | undefined;
}

const contentContext = createContext<ContentContext>({
  state: defaultContent,
  setState: () => {
    return undefined;
  },
});

export default contentContext;
