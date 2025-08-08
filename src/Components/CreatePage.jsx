import React, {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { createData } from '../CurdRedux/Slices/CurdSlice';

function CreatePage(props) {
    const[inserUserData, setInsertUserData] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const handleSubmit = ()=>{ 
        dispatch(createData(inserUserData));
        alert('Your Data Successfully Submitted...');
        navigate('/');
    }

    return (
       <div>
            <div className='d-flex w-100 mt-3 justify-content-center align-items-center'>
                <div className='w-75 border text-white p-3' style={{ borderRadius: "20px", boxShadow: "0px 8px 15px 1px black", backgroundColor: "#f7dc6f " }}>
                    <h1 style={{ textAlign: "center", color: "#d33525" }}><u>User Registration Form</u></h1> <br />
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridId">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Id</Form.Label>
                                <Form.Control type="number" name='id' placeholder="Enter User Id" required onChange={(e)=> setInsertUserData({...inserUserData, id: e.target.value})}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter User Name" onChange={(e)=> setInsertUserData({...inserUserData, name: e.target.value})} required/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAge">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Age</Form.Label>
                                <Form.Control type="number" name='age' placeholder="Enter User Age" onChange={(e)=> setInsertUserData({...inserUserData, age: e.target.value})} required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Gender</Form.Label>
                                <Form.Select name='gender' defaultValue="Choose..." onChange={(e)=> setInsertUserData({...inserUserData, gender: e.target.value})} required>
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
                                <Form.Control type="email" name='email' placeholder="Enter User Email" onChange={(e)=> setInsertUserData({...inserUserData, email: e.target.value})} required/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Phone</Form.Label>
                                <Form.Control type="tel" name='phone' placeholder="Enter User Number" onChange={(e)=> setInsertUserData({...inserUserData, phone: e.target.value})} required/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Address</Form.Label>
                                <Form.Control type="text" name='city' placeholder="Enter User City" onChange={(e)=> setInsertUserData({...inserUserData, city: e.target.value})} required />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default CreatePage;