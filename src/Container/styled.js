import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin: 70px;
    padding: 0 50px;
    border: 10px double rgb(0, 98, 255);
    background: rgb(43, 209, 255);

    @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    flex-direction: column;
  }
`;