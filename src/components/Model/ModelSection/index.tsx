import { Container } from "./styles";

const ModelSection: React.FC = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
