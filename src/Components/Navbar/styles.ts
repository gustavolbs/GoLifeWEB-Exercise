import styled from "styled-components";

export const Container = styled.div`
  .navbar {
    position: fixed;
    background-color: var(--bg-primary);
    transition: width var(--transition-speed) ease;
  }
  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-primary);
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
  }

  .nav-link:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
  }

  .link-text {
    display: none;
    margin-left: 1rem;
  }

  .nav-link {
    i {
      margin: 0 1.8rem;
      font-size: 24px;
    }

    svg {
      width: 2rem;
      min-width: 2rem;
      margin: 0 1.8rem;
    }
  }

  .logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;
  }

  .logo svg {
    transform: rotate(0deg);
    transition: var(--transition-speed);
  }

  .logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: var(--transition-speed);
  }

  .navbar:hover .logo svg {
    transform: rotate(-180deg);
  }

  /* Small screens */
  @media screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 5rem;
    }

    .logo {
      display: none;
    }

    .navbar-nav {
      flex-direction: row;
    }

    .nav-link {
      justify-content: center;
    }

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      i,
      i:before {
        margin: 0 !important;
        width: 16px !important;
        height: 16px !important;
        min-width: auto !important;
      }

      .link-text {
        display: block;
        margin: 0;
        text-align: center;
      }
    }

    main {
      margin: 0;
    }
  }

  /* Really small screens */
  @media screen and (max-width: 400px) {
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      i,
      i:before {
        margin: 0 !important;
        width: 16px !important;
        height: 16px !important;
        min-width: auto !important;
      }

      .link-text {
        display: none;
        margin: 0;
        text-align: center;
      }
    }
  }

  /* Large screens */
  @media screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 5rem;
      height: 100vh;
    }

    .navbar:hover {
      width: 16rem;
    }

    .navbar:hover .link-text {
      display: inline;
    }

    .navbar:hover .logo svg {
      margin-left: 11rem;
    }

    .navbar:hover .logo-text {
      left: 0px;
    }
  }
`;
