import styled from "styled-components/macro";
export const Text = styled.p`
  flex-basis: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const Input = styled.input`
  height: 38px;
  flex: 1;
  margin-top: 20px;
  padding-left: 5px;
`;
export const Button = styled.button`
  img {
    width: 12px;
    filter: brightness(0) invert(1);
    margin-left: 10px;
  }
  margin-top: 20px;
  height: 44px;
  background-color: #e50914;
  border: none;
  width: 150px;
  cursor: pointer;
  padding: 0 9px;
  padding-right: 0px;
  color: white;
  &:hover {
    background-color: #ff0e1a;
  }
`;
