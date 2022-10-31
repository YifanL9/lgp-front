import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../logo/logo.png";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" href="#home">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              className="d-inline-block align-top rounded"
              width="40"
              height="40"
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#login">Login</Nav.Link>
            {/* <button className="login_btn">Login</button> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
