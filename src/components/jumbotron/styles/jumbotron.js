import styled from "styled-components/macro";
export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  align-content: center;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;
export const Pane = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 94%;
  }
`;
export const SubTitle = styled.h2``;
export const Title = styled.h1``;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export const Wraper = styled.div`
  width: 100%;
  border-bottom: 2px solid darkgray;
`;
