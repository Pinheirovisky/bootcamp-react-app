import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: #f37a19;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 100%;
  max-width: 480px;
  height: 56px;
  cursor: pointer;
  transition: 300ms all;
  font-weight: 600;
  font-size: 16px;
  font-family: Inter;

  &:hover {
    background-color: #f87913;
  }
`;

export default ButtonStyles;
