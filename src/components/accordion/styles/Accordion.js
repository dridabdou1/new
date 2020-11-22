import styled from "styled-components/macro";
export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #888;
  paddin-bottom: 20px;
`;
export const Title = styled.h1`
  margin-right: 4em;
`;
export const Inner = styled.div`
  display: flex;
  padding: 75px 45px;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
`;
export const Frame = styled.div``;
export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  &:first-of-type {
    margin-type: 3em;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background: #303030;
  padding: 0.7em 1.2em;
  align-items: center;
  img {
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 600px) {
      width: 16px;
    }
  }
`;
export const Body = styled.div`
  max-height: 1200px;
  background: #353535;
  whitespace: pre-wrap;
  padding: 0.8em 2.2em 0.8em 1.2em;
`;
