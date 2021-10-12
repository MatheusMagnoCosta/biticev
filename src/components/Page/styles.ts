import styled from "styled-components";

export const Container = styled.div``;

export const ParticleBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  z-index: -1;
`;

export const Button = styled.button`
  position: relative;
  background-color: #8DB8F2;
  border: none;
  padding: 10px 50px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 400;
  transition: 0.5s;

  &:hover {
    background: #A3CAFF;
    transition: all 0.35s;
  }
`;
