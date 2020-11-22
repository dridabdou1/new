import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1000px;
  padding: 70px 56px;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 600px) {
    padding: 70px 30px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gab: 15px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
export const Link = styled.a`
  text-decoration: none;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled.div``;
export const Text = styled.div``;
