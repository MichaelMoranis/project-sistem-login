import styled from "styled-components";


export const Container_1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-items: center;
  height: 100vh;
`;
export const ContainerTheme = styled.div`
   display: flex;
   justify-content: space-between;
`;

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
  max-width: 600px;
  gap: 15px;
  border-radius: 5px;
  /* box-shadow: 0 1px 2px #0003; */
  /* background-color:#1a202c; */
`;

export const Label = styled.label`
    font-size: 36px;
    font-weight: 600;
    color: #3182ce;
`;

export const LabelSignup = styled.label`
    font-size: 20px;
    color: #3182ce;
`;

export const LabelError = styled.label`
  font-size: 20px;
  color: #3182ce;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        font-size: 23px;
        color: #3182ce;
    }
`;


