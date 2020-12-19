import React, { useContext, useEffect, useState } from "react";
import ContentContext from "../Contexts/content";
import TitleContext from "../Contexts/pageTitle";

import api from "../Services/api";

import { Main, Container } from "./styles";

interface Post {
  title: string;
  category: string;
  content: string;
}

const Pages: React.FC = () => {
  const { state, setState } = useContext(ContentContext);
  const { title, setTitle } = useContext(TitleContext);
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await api.get<Post[]>("/posts");

      setData(response.data);
    }

    fetchPosts();
  }, []);

  return (
    <main>
      <h1>{title}</h1>

      <Container>
        {state.map((item) => (
          <Main>
            <h1>{item.title}</h1>

            <ul>
              {data.map((message: Post) => {
                if (item.properties.categories.includes(message.category)) {
                  return <li>{message.title}</li>;
                }
                return;
              })}
            </ul>
          </Main>
        ))}
      </Container>
    </main>
  );
};

export default Pages;
