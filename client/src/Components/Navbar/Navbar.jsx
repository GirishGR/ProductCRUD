import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbarr = () => {
  return <>

  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">ProductsCRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/admin">ProductTable</Nav.Link>
            <Nav.Link href="/test">Test</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  </>
}

export default Navbarr;


{/* <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
              <Link to="/home" className='navbar-brand mx-3' >ProductsCRUD</Link>

              <div>
                  <ul className='navbar-nav'>
                    <li><Link to="/home" className='nav-link'>Home</Link></li>
                    <li><Link to="/products"className='nav-link'>Products</Link></li>
                    <li><Link to="/admin" className='nav-link'>ProductTable</Link></li>
                    <li><Link to="/test" className='nav-link'>Test</Link></li>

                  </ul>



              </div>
          </nav> */}