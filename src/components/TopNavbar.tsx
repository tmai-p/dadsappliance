import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import dads_logo from "../images/dads_logo.jpg";

function TopNavbar() {
  const isHidden = true;
  return (
    <div className="sticky-top">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <a className="navbar-brand" href={import.meta.env.BASE_URL}>
              <img
                src={dads_logo}
                className="d-inlinel-block align-top"
                alt="DAD'S Logo"
                width={200}
                height={75}
              />
              <span style={{ display: isHidden ? "none" : "block" }}>
                Dad's logo
              </span>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href={import.meta.env.BASE_URL}>Home</Nav.Link>
              <Nav.Link as={Link} to={"about"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"service"}>
                Service
              </Nav.Link>
              <Nav.Link as={Link} to={"contact"}>
                Contact
              </Nav.Link>
              <NavDropdown title="Specials" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={"fridges"}>
                  Refrigerator
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"ranges"}>
                  Ranges
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something Else
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavbar;
