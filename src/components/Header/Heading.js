import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';

const Heading = () => {
    return (
        <div className='p-3'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='text-warning fw-bold'>MERN Developer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">HOME</Nav.Link>
                            <Nav.Link href="/services">Projects</Nav.Link>
                            <Nav.Link href="/blogs">BLOGS</Nav.Link>
                            <Nav.Link href="/pages">PAGES</Nav.Link>
                            <Nav.Link href="/contacts">CONTACTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Heading;