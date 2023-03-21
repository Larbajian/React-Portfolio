import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
      

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
  navbarStyle: {
    background: '#6B8F71',
    color: '#564E58', 
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <div >
    <Navbar  expand="lg" style={styles.navbarStyle}  variant="dark">
      <Container >
        <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
        <Nav.Link 
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
            About Me
        </Nav.Link>

        <Nav.Link href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
        Portfolio
        </Nav.Link>

        <Nav.Link href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
         Resume
         </Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            Contact Lexi
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}


export default Header;
