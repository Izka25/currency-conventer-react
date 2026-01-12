import styled from "styled-components";

export const Legend = styled.legend`
    font-size: 50px;
    font-weight: bold;
`;

export const Label = styled.label`
    display: block;
    font-size: 30px;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const Button = styled.button`
    font-weight: bold;
    width: 40%;
    padding: 5px;
    background-color: ${({ theme }) => theme.color.yellow};
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 8px 6px 6px 6px;
    background-color: ${({ theme }) => theme.color.pastelGreen};
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 20px;
`;

export const Select = styled.select`
    display: block;
    width: 100%;
    padding: 8px 6px 6px 6px;
    background-color: ${({ theme }) => theme.color.pastelGreen};
    font-weight: bold;
    font-size: 15px;
`;

export const Stopka = styled.p`
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.color.emperor};
`;

export const Loading = styled.p`
color: ${({ theme }) => theme.color.teal};
`;

export const Failure = styled.p`
color: ${({ theme }) => theme.color.crimson};
`;