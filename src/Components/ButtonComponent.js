import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.textColor};
  background: ${props => props.backgroundColor};
  width: 100%;
  padding: 20px;
  border-radius: 32px;
  margin: 4px 0;
  font-size: 16px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;
const ButtonComponent = ({backgroundColor, buttonText, textColor}) => {
  return (
    <Button backgroundColor={backgroundColor} textColor={textColor}>{buttonText}</Button>
  )
}

export default ButtonComponent;
