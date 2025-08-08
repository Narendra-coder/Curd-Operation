import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { updateData } from '../CurdRedux/Slices/CurdSlice';

function UpdatePage(props) {
    const { id } = useParams();

    const [updateUserData, setUpdateUserData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.allCurd.data);

    useEffect(() => {
        if (id) {
            let filterValue = userData.filter((value) => value.id === id);
            setUpdateUserData(filterValue[0]);
        }
    },[id])

    const handleSubmit = () => {
        dispatch(updateData(updateUserData));
        alert('Your Data Successfully updated...');
        navigate('/');
    }

    return (
        <div>
            <div className='d-flex w-100 mt-3 justify-content-center align-items-center'>
                <div className='w-75 border text-white p-3' style={{ borderRadius: "20px", boxShadow: "0px 8px 15px 1px black", backgroundColor: "#f7dc6f " }}>
                    <h1 style={{ textAlign: "center", color: "#d33525" }}><u>User Update Form</u></h1> <br />
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridId">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Id</Form.Label>
                                <Form.Control type="number" name='id' placeholder="Enter User Id" required value={updateUserData.id} onChange={(e) => setUpdateUserData({ ...updateUserData, id: e.target.value })} disabled/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter User Name" value={updateUserData.name} onChange={(e) => setUpdateUserData({ ...updateUserData, name: e.target.value })} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAge">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Age</Form.Label>
                                <Form.Control type="number" name='age' placeholder="Enter User Age" value={updateUserData.age} onChange={(e) => setUpdateUserData({ ...updateUserData, age: e.target.value })} required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Gender</Form.Label>
                                <Form.Select name='gender' value={updateUserData.gender} defaultValue="Choose..." onChange={(e) => setUpdateUserData({ ...updateUserData, gender: e.target.value })} required>
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
                                <Form.Control type="email" name='email' placeholder="Enter User Email" value={updateUserData.email} onChange={(e) => setUpdateUserData({ ...updateUserData, email: e.target.value })} required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Phone</Form.Label>
                                <Form.Control type="tel" value={updateUserData.phone} name='phone' placeholder="Enter User Number" onChange={(e) => setUpdateUserData({ ...updateUserData, phone: e.target.value })} required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Address</Form.Label>
                                <Form.Control type="text" name='city' value={updateUserData.city} placeholder="Enter User City" onChange={(e) => setUpdateUserData({ ...updateUserData, city: e.target.value })} required />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default UpdatePage;