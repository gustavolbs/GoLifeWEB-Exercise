import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  background-color: #fff;
  width: 100%;
  max-width: 530px;
  border-radius: 7px;
  box-shadow: 0 2px 4px 0 #dee2f2;
  margin: 0 0 24px !important;

  h1 {
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 25px;
    text-align: center;
  }

  @media screen and (max-width: 1000px) {
    max-width: 92%;
  }
`;
