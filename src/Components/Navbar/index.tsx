import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ContentContext from "../../Contexts/content";
import TitleContext from "../../Contexts/pageTitle";

import { ReactComponent as NavbarLogo } from "../../Assets/SVG/arrow-navbar.svg";

import api from "../../Services/api";

import { Container } from "./styles";

interface Page {
  icon: string;
  title: string;
  url: string;
  content: [];
}

const Navbar: React.FC = () => {
  const [data, setData] = useState<Page[]>([]);
  const { state, setState } = useContext(ContentContext);
  const { title, setTitle } = useContext(TitleContext);

  useEffect(() => {
    async function fetchPages() {
      const response = await api.get<Page[]>("/pages");

      response.data.map((page: Page) => {
        const url = `/${page.url.split("//")[1]}`;

        if (url === window.location.pathname) {
          setState(page.content);
          setTitle(page.title);
        }

        return null;
      });

      setData(response.data);
    }

    fetchPages();
  }, []);

  return (
    <Container>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <Link to={"/"} className="nav-link">
              <NavbarLogo />
              <span className="link-text logo-text">GoLife</span>
            </Link>
          </li>

          {data.map((page: Page) => {
            return (
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setState(page.content);
                    setTitle(page.title);
                  }}
                  to={page.url.split("//")[1]}
                  className="nav-link"
                >
                  <i className={`fa ${page.icon}`} />
                  <span className="link-text">{page.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
