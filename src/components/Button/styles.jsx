import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 350px;
  cursor: pointer;
  background-color: #31323298;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
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
  background-color: #fef9f9;
`;

export const Label = styled.label`
    font-size: 30px;
    font-weight: 600;
    color: #272727;
`;