import { ModelsWrapper, ModelSection } from "../Model";
import Particles from "react-particles-js";

import { Container, ParticleBackground } from "./styles";

function Page() {
  return (
    <Container>
      <ParticleBackground>
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
              },
              size: {
                value: 3,
              },
            },
          }}
        />
      </ParticleBackground>
      <ModelsWrapper>
        <div>
          <ModelSection>
            <div>
              <a href="#home">
                <span>Home</span>
              </a>
              <a href="#quem-somos">
                <span>Quem Somos</span>
              </a>
              <a href="#servicos">
                <span>Serviços</span>
              </a>
              <a href="#time">
                <span>Time</span>
              </a>
              <a href="#contato">
                <span>Contato</span>
              </a>
            </div>
          </ModelSection>
          <ModelSection>
            <h1 style={{ color: "red" }}>IH ALA</h1>
          </ModelSection>
        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
