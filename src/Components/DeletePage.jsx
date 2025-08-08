import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router';
import { deleteData } from '../CurdRedux/Slices/CurdSlice';

function DeletePage(props) {
    const { id } = useParams();

    const [deleteUserData, setDeleteUserData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.allCurd.data);

    useEffect(() => {
        if (id) {
            let filterValue = userData.filter((value) => value.id === id);
            setDeleteUserData(filterValue[0]);
        }
    }, [id])

    const handleSubmit = () => {
        dispatch(deleteData(deleteUserData));
        alert('Your Data Successfully Deleted...');
        navigate('/');
    }

    return (
        <div>
            <div className='d-flex w-100 mt-3 justify-content-center align-items-center'>
                <div className='w-75 border text-white p-3' style={{ borderRadius: "20px", boxShadow: "0px 8px 15px 1px black", backgroundColor: "#f7dc6f " }}>
                    <h1 style={{ textAlign: "center", color: "#d33525" }}><u>User Delete Form</u></h1> <br />
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridId">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Id</Form.Label>
                                <Form.Control type="number" name='id' placeholder="Enter User Id" required value={deleteUserData.id} disabled />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter User Name" value={deleteUserData.name} disabled />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAge">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Age</Form.Label>
                                <Form.Control type="number" name='age' placeholder="Enter User Age" value={deleteUserData.age} disabled />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Gender</Form.Label>
                                <Form.Select name='gender' value={deleteUserData.gender} defaultValue="Choose..." disabled>
                                    <option>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Email</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter User Email" value={deleteUserData.email} disabled />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Phone</Form.Label>
                                <Form.Control type="tel" value={deleteUserData.phone} name='phone' placeholder="Enter User Number" disabled />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Address</Form.Label>
                                <Form.Control type="text" name='city' value={deleteUserData.city} placeholder="Enter User City" disabled />
                            </Form.Group>
                        </Row>
                        <Button variant="danger mx-2" type="submit">
                            Delete
                        </Button>

                        <NavLink to='/'>
                            <Button variant="warning">
                                Home
                            </Button>
                        </NavLink>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default DeletePage;