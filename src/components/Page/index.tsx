import { ModelsWrapper, ModelSection, Carousel1, Maps, NavBar} from "../Model";
import { Container, ParticleBackground, Button, ButtonForm } from "./styles";

import Home from "../../styles/Home.module.css";
import Quemsomos from "../../styles/Quemsomos.module.css";
import Servicos from "../../styles/Servicos.module.css";
import Time from "../../styles/Time.module.css";
import Contato from "../../styles/Contato.module.css";

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
      <NavBar/>
      {/* <div className={Home.container}>
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
      </div> */}

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
            <div className={Home.container} id="home">
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
              <h2>Time</h2>
              <Carousel1 />
            </div>
          </ModelSection>

          {/*Contato*/}
          <ModelSection>
            <div className={Contato.main} id="contato">
              <div className={Contato.container}>
                <h2>Contato</h2>
                <div className={Contato.contato}>
                  <form className={Contato.form}>
                    <p>Leave us a mesage</p>
                    <input
                      className={Contato.input}
                      type="text"
                      placeholder="Nome"
                    ></input>
                    <input
                      className={Contato.input}
                      type="email"
                      placeholder="Email"
                    ></input>
                    <input
                      className={Contato.input}
                      type="text"
                      placeholder="Sua Mensagem"
                    ></input>
                    <ButtonForm type="submit">Send</ButtonForm>
                  </form>
                  <div className={Contato.containerInfo}>
                    <div className={Contato.info}>
                      <img src={IconBlock} className={Contato.icon} alt="" />
                      <p>bitcev@gmail.com </p>
                    </div>
                    <div className={Contato.info}>
                      <img src={IconBlock} className={Contato.icon} alt="" />
                      <p>bitcev@gmail.com </p>
                    </div>
                    <div className={Contato.info}>
                      <img src={IconBlock} className={Contato.icon} alt="" />
                      <p>bitcev@gmail.com </p>
                    </div>
                    <div className={Contato.social}>
                      <img className={Contato.icon} src={IconBlock} alt="" />
                      <img className={Contato.icon} src={IconBlock} alt="" />
                      <img className={Contato.icon} src={IconBlock} alt="" />
                      <img className={Contato.icon} src={IconBlock} alt="" />
                    </div>
                    <Maps />
                  </div>
                </div>
              </div>
              <div className={Contato.rodape}>
                <div className="">
                  <img className={Contato.logomarca} src={Logomarca} alt="" />
                </div>
                <div className={Contato.link}>
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
              </div>
            </div>
          </ModelSection>
        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
