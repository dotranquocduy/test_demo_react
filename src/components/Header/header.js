import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";


const Header=()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      
      <Container>
        {/* <Navbar.Brand href="#home">Duy Đỗ</Navbar.Brand> */}
        <NavLink to="/" className='navbar-brand'>Duy Đỗ</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink to="/" className='nav-link'>Home</NavLink>
          <NavLink to="/users" className='nav-link'>user</NavLink>
          <NavLink to="/Admins" className='nav-link'>Admin</NavLink>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">user</Nav.Link>
            <Nav.Link href="#link">Admin</Nav.Link> */}
           
          </Nav>

          <Nav>
            <NavDropdown title="setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item >profile</NavDropdown.Item>  
              <NavDropdown.Divider />
              <NavDropdown.Item > Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;