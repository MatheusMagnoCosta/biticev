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
  background-color: yellow;
  border: none;
  padding: 10px 50px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 400;
  transition: 0.5s;

  & > a {
    z-index: 10;
  }
  &:hover {
    background-color: transparent;    
}

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #ff003b;
    transition: all 0.35s;
  }
  &:hover:after {
    width: 100%;
    z-index: -10;
  }
`;
