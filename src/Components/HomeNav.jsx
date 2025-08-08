import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router';
import { searchData } from '../CurdRedux/Slices/CurdSlice';

function HomeNav(props) {
    const[searchUserData, setSearchUserData] = useState("");

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(searchData(searchUserData))
    },[searchUserData])

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand><i className="fa-solid fa-bezier-curve"></i> CURD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Navbar.Brand>
                                <Button variant="outline-primary" >
                                    <NavLink to='/' style={{ textDecoration: "none", color: "#000" }}>Home</NavLink>
                                </Button>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Button variant="outline-primary">
                                    <NavLink to='/create-page' style={{ textDecoration: "none", color: "#000" }}>Create</NavLink>
                                </Button>
                            </Navbar.Brand>
                            
                        </Nav>
                        <Form className="d-flex w-50">
                            <Form.Control
                                type="search"
                                placeholder="Search User Name"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e)=> setSearchUserData(e.target.value)}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default HomeNav;