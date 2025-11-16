import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin: 70px;
    padding: 0 50px;
    border: 10px double ${({ theme }) => theme.color.blueRibbon};
    background: ${({ theme }) => theme.color.dodgerBlue};

    @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    flex-direction: column;
  }
`;