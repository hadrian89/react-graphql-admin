import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink, Outlet } from "react-router-dom";
export default function Layout() {
  const testMenuItems = [
    {
      href: '/',
      title: 'Introduction',
    },
    {
      href: 'about',
      title: 'About',
    },
    {
      href: 'contact',
      title: 'Contact',
    }
  ];
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav >
              {testMenuItems.map(({ href, title }) => (
                <NavLink to={href} className="nav-link">
                  {title}
                </NavLink>
              ))}
              <NavDropdown title="Dropdown" bg="primary" data-bs-theme="dark">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className={'flex-1'}>
        <Outlet />
      </main>
    </div>
  );
}