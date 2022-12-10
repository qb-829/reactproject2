
import {
    Link,
  } from 'react-router-dom'
import '../assets/styles/baselayout.css'
import '../assets/styles/bootstrap.css'
import '../assets/styles/responsive.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from './Search';

export default function Navigation(props) {
  return <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">MovieList</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movie">Movie</Nav.Link>
            {/* <NavDropdown title="Genre" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Romance
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Comedy
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <Search handleSubmit={props.handleSubmit}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>;
}


// export default function Navbar() {
//   return <>
//     <div>
//         <nav>
//           <Link to='/' >Home</Link> &nbsp;
//           <Link to='/movie' >Movie</Link>
//         </nav>
//     </div>
//   </>
// }