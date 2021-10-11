import { ModelsWrapper, ModelSection } from "../Model";
import Particles from "react-particles-js";

import { Container } from "./styles";

function Page() {
  return (
    <Container>
      <div
        style={{
          position: "fixed",
          overflowY: "scroll",
          zIndex: -1,
          width: "100vw",
          height: "100vh",
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
              },
              size: {
                value: 3,
              },
            }
          }}
        />
      </div>
      <ModelsWrapper>
        <div style={{ zIndex: 10 }}>
          <ModelSection>
            <h1 style={{ color: "red" }}>IH ALA</h1>
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
