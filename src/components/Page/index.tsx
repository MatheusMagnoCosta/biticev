import { ModelsWrapper, ModelSection } from "../Model";
import { Container, ParticleBackground, Button } from "./styles";

import Home from "../../styles/Home.module.css";
import Logomarca from "../../assets/img/logomarca_white.png";
import Particles from "react-particles-js";

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
            <div className={Home.container}>
              <div className={Home.header}>
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
              <div className={Home.hero}>
                <img className={Home.logomarca} src={Logomarca} alt="" />
                <span className={Home.description}>Fábrica de software</span>
                <Button><a>Edital</a></Button>
              </div>
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
