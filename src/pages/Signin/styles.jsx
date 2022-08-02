import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const  Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  max-width: 350px;
  gap: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 2px #0003;
  background-color: #cec9c9;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #efeaea;
`;

export const LabelSignup = styled.label`
    font-size: 16px;
    color: #111010;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #252424;
    }
`;


