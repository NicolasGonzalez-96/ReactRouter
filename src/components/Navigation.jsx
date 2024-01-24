import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="danger">
      <Container className="justify-content-between">
        <Nav>
          <Nav.Item className="d-flex align-items-center">
            <FontAwesomeIcon icon={faHome} className="text-white me-2" />
            <Link
              to="/"
              className="text-white text-decoration-none home-link"
              style={{ paddingRight: "15px" }}
            >
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center">
            <FontAwesomeIcon icon={faBook} className="text-white me-2" />
            <Link to="/contacto" className="text-white text-decoration-none">
              Contacto
            </Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item className="text-white ms-3">Happy Cake</Nav.Item>
          <Nav.Item>
            <FontAwesomeIcon icon={faBirthdayCake} className="text-white ms-2" />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
