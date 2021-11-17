import { ModelsWrapper, ModelSection, Carousel1, Maps, NavBar} from "../Model";
import { Container, ParticleBackground, Button, ButtonForm } from "./styles";

import Home from "../../styles/Home.module.css";
import Quemsomos from "../../styles/Quemsomos.module.css";
import Servicos from "../../styles/Servicos.module.css";
import Time from "../../styles/Time.module.css";
import Contato from "../../styles/Contato.module.css";

import Logomarca from "../../assets/img/logomarca_white.png";
import Logotipo from "../../assets/img/logotipo_bg.png";
//import Icon1 from "../../assets/img/icon_1.png";
//import Icon2 from "../../assets/img/icon_2.png";
import IconBlock from "../../assets/img/icon_block.png";
import IconAppDesign from "../../assets/img/icon_app_design.png";
import IconDesenvolvimento from "../../assets/img/icon_desenvolvimento.png";
import IconRequisitos from "../../assets/img/icon_requisitos.png";
import IconValores from "../../assets/img/compassion.png";
import IconMissao from "../../assets/img/valores.png";
//import Desenvolvimento from "../../assets/img/teamwork.png";

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
                    Tendo em vista a missão da Escola de Tecnologia Aplicada do iCEV de fornecer à comunidade Piauiense um espaço de suporte a propostas inovadoras, nasce a Fábrica de Software - BitiCEV, em 2021. Desse modo, visamos proporcionar a conquista da excelência e eficiência no desenvolvimento de iniciativas empreendedoras, por meio da disponibilização de serviços voltados ao desenvolvimento de aplicações de TI. 
                      <br />
                      <br />
                    Ademais, somos um contexto de desenvolvimento acadêmico, uma vez que professores e docentes realizam trabalho integrado para seleção e execução de abordagens criativas, ágeis e diferenciadas para a prestação dessas funções, sempre atentos às responsabilidades sociais alcançadas.
                    </p>
                  </span>
                </div>

                <div className={Quemsomos.list}>
                  <div className={Quemsomos.item}>
                    <img className={Quemsomos.icone} src={IconMissao} alt="" />
                    <div className={Quemsomos.item__description}>
                      <h3>Missão</h3>
                      <p>
                      Proporcionamos serviços de consultoria, curadoria, design e desenvolvimento de software, por meio da atuação em um espaço inovador, com integração de alunos e professores em uma jornada de aprendizagem criativa.
                      </p>
                    </div>
                  </div>
                  <div className={Quemsomos.item}>
                    <img className={Quemsomos.icone} src={IconValores} alt="" />
                    <div className={Quemsomos.item__description}>
                      <h3>Valores</h3>
                      <p>
                      Fornecer orientação e direção a idealização, planejamento e construção de produtos tecnológicos, com foco na praticidade, velocidade e qualidade.
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
                  <img className={Servicos.icone} src={IconDesenvolvimento} alt="" />
                  <h3>Desenvolvimento</h3>
                  <p>Construção de aplicações com metodologias ágeis e aplicações de padrões de projetos, tendo em vista a qualidade, manutenibilidade e escalabilidade do projetos.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconAppDesign} alt="" />
                  <h3>Design UI/UX</h3>
                  <p>Realização de prototipagem de projetos, tendo em foco a excelência da experiência de uso do usuário na aplicação, em consonância com a missão e valores almejados.</p>
                </div>

                <div className={Servicos.item}>
                  <img className={Servicos.icone} src={IconRequisitos} alt="" />
                  <h3>Consultoria</h3>
                  <p>Por meio da realização de técnicas de elicitação, determinam-se e analisam-se Requisitos Funcionais e Não Funcionais de projetos em estágio de concepção</p>
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
                    <p>Fale Conosco</p>
                    <input
                      className={Contato.input}
                      type="text"
                      placeholder=" Nome"
                    ></input>
                    <input
                      className={Contato.input}
                      type="email"
                      placeholder=" Email"
                    ></input>
                    <input
                      className={Contato.input}
                      type="text"
                      placeholder=" Sua Mensagem"
                    ></input>
                    <ButtonForm type="submit">Enviar</ButtonForm>
                  </form>
                  <div className={Contato.containerInfo}>
                    <div className={Contato.info}>
                      <img src={IconBlock} className={Contato.icon} alt="" />
                      <p>bitcev@gmail.com </p>
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
