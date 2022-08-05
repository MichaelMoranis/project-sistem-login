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

`;

export const Label = styled.label`
    font-size: 36px;
    font-weight: 600;
    color: #3182ce;
`;

export const LabelSignin = styled.label`
    font-size: 26px;
    color: #3182ce;
`;

export const LabelError = styled.label`
  font-size: 25px;
  color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #3182ce;
    }
`;


