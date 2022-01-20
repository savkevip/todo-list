import styled from "styled-components";

export const Container = styled.div`
    widht: 100%;
    height: 100vh;
    background-color: #cfcfcf;
    padding: 20px;
`;

export const Header = styled.div`
    display: flex;
`;

export const Input = styled.input`
    width: 70%;
    height: 30px;
    padding: 5px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    margin-left: 10px;
    border: none;
    height: 30px;
    width: 100px;
`;

export const TodoList = styled.div`
    margin-top: 10px;
`;

export const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input`
    margin-right: 10px;
`;

export const Text = styled.p`
    margin-right: 10px;
    ${props => props.done && `text-decoration: line-through;`}
`;