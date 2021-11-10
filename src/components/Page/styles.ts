import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
`;

export const ParticleBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  //z-index: -1;
`;

export const Button = styled.button`
  position: relative;
  background-color: #8db8f2;
  border: none;
  padding: 10px 50px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 400;
  transition: 0.5s;

  &:hover {
    background: #a3caff;
    transition: all 0.35s;
  }
`;

export const ButtonForm = styled.button`
  background-color: #ab65d9;
  /* width: 100%; */
  border: none;
  border-radius: 4px;
  transition: 0.5s;
  font-weight: bold;
  color: #e1e2ed;
  line-height: 27px;
  height: 30px;
  &:hover {
    background: #a3caff;
    transition: all 0.35s;
  }
`;
