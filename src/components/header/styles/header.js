import styled from "styled-components/macro";
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background: url(${({ src }) => (src ? src : "/images/misc/home-bg.jpg")});
  height: 100vh;
`;
export const Container = styled.div`
  height: 64px;
  padding: 18px 0;
  margin: 0 56px;
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.img`
  height: 30px;
`;
export const SigninButton = styled.button`
  height: 30px;
  background-color: #e50914;
  border: none;
  width: 80px;
  cursor: pointer;
  padding: 0 9px;
  color: white;
  &:hover {
    background-color: #ff0e1a;
  }
`;
