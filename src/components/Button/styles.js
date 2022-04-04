import styled from "styled-components";

export const Container = styled.button`
    padding: 15px;
    border: none;
    border-radius: 6px;
    min-width: 100px;
    height: 50px;
    outline: none;
    background: #78ffd6;
    font-size: 18px;
    cursor: pointer;
    
    &:hover {
        background: ${({ theme }) => theme.colors.gradient};
    }
`