import { ModelsWrapper, ModelSection } from "../Model";
import { Container, ParticleBackground, Button } from "./styles";

import Home from "../../styles/Home.module.css";
import Quemsomos from "../../styles/Quemsomos.module.css";
import Servicos from "../../styles/Servicos.module.css";
import Time from "../../styles/Time.module.css";

import Logomarca from "../../assets/img/logomarca_white.png";
import Logotipo from "../../assets/img/logotipo_bg.png";
import Avatar from "../../assets/img/avatar.png";
import Icon1 from "../../assets/img/icon_1.png";
import Icon2 from "../../assets/img/icon_2.png";
import IconBlock from "../../assets/img/icon_block.png";

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
          {/*Home*/}
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
                <a href="#edital">
                  <Button>Edital</Button>
                </a>
              </div>
            </div>
          </ModelSection>
          {/*Quem somos*/}
          <ModelSection>
            <div className={Quemsomos.container} id="quem-somos">
              <div className={Quemsomos.leftContainer}>
                <div className={Quemsomos.description}>
                  <h2>Biticev</h2>
                  <span>
                    <p>
                      Sed tempus justo leo, in fringilla mauris pharetra vel.
                      Pellentesque pellentesque, velit a eleifend hendrerit,
                      tortor ante dapibus diam, eu sodales ante tortor eget
                      metus. Aenean pharetra turpis malesuada tincidunt
                      ultrices.
                      <br />
                      <br />
                      Maecenas scelerisque risus sed rhoncus tempus. Vivamus in
                      quam sagittis, suscipit purus et, scelerisque risus.
                      Vivamus id magna velit. Aenean nec libero eget risus
                      sollicitudin rutrum sit amet ut urna. Vivamus pretium
                      posuere tincidunt. Nam id consequat nisl, et scelerisque
                      orci.
                    </p>
                  </span>
                </div>

                <div className={Quemsomos.list}>
                  <div className={Quemsomos.item}>
                    <img className={Quemsomos.icone} src={Icon1} alt="" />
                    <div className={Quemsomos.item__description}>
                      <h3>Missão</h3>
                      <p>
                        Quisque eget consequat nisi, sed sollicitudin metus. Nam
                        faucibus viverra dui vitae pulvinar. Donec diam lacus,
                        sollicitudin eu metus eu,
                      </p>
                    </div>
                  </div>
                  <div className={Quemsomos.item}>
                    <img className={Quemsomos.icone} src={Icon2} alt="" />
                    <div className={Quemsomos.item__description}>
                      <h3>Valores</h3>
                      <p>
                        Quisque eget consequat nisi, sed sollicitudin metus. Nam
                        faucibus viverra dui vitae pulvinar. Donec diam lacus,
                        sollicitudin eu metus eu,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Quemsomos.rightContainer}>
                <img className={Quemsomos.logotipo} src={Logotipo} alt="" />
              </div>
            </div>
          </ModelSection>

          {/*Servicos*/}
          <ModelSection>
            <div className={Servicos.container} id="servicos">
              <h2>Serviços</h2>
              <div className={Servicos.list}>
                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconBlock} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconBlock} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconBlock} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconBlock} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconBlock} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconBlock} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Lorem ipsum dolor sit amet, consecteteu.</p>
                </div>
              </div>
            </div>
          </ModelSection>

          {/*Time*/}
          <ModelSection>
            <div className={Time.container} id="time">
              <div
                className="gallery js-flickity"
                data-flickity-options='{ "wrapAround": true, "autoPlay": 2500, "fade": true}'
              >
                <div className="gallery-cell">
                  <div className={Time.time}>
                    <img className={Time.avatar} src={Avatar} alt="" />
                    <h3>Nome</h3>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </span>
                  </div>
                </div>
                <div className="gallery-cell">
                  <div className={Time.time}>
                    <img className={Time.avatar} src={Avatar} alt="" />
                    <h3>Nome 1</h3>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </span>
                  </div>
                </div>
                <div className="gallery-cell">
                  <div className={Time.time}>
                    <img className={Time.avatar} src={Avatar} alt="" />
                    <h3>Nome 2</h3>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </span>
                  </div>
                </div>
                <div className="gallery-cell">
                  <div className={Time.time}>
                    <img className={Time.avatar} src={Avatar} alt="" />
                    <h3>Nome 3</h3>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ModelSection>

          {/*Contato*/}
          <ModelSection></ModelSection>
        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
