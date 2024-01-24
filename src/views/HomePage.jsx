import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <p>El lugar de los pasteles felices</p>
      <FontAwesomeIcon icon={faBirthdayCake} size="2x" className="mt-2" />
    </Container>
  );
};

export default HomePage;
