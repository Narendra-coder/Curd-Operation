import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { readData } from '../CurdRedux/Slices/CurdSlice';
import { NavLink } from 'react-router';


function HomePage(props) {
    const [radioData, setRadioData] = useState(" ");

    const dispatch = useDispatch();

    const userData = useSelector((state) => state.allCurd.data);

    const userSearch = useSelector((state) => state.allCurd.search);

    useEffect(() => {
        dispatch(readData());
    }, [])

    return (
        <div className='container mt-2 '>
            <h1 style={{ textAlign: "center", color: "#d33525", fontFamily: "Rockwell" }}><u>All User Data Using RTK</u></h1>

            <center>
                {/* Gender Start */}
                <div style={{ boxShadow: "2px -2px 8px 1px black", margin: "10px 37%", padding: "12px", fontSize: "1.1rem", fontWeight: "bold", borderRadius: "8px" }}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="all"
                            checked={radioData === " "} onChange={() => { setRadioData(" "); }} style={{ cursor: "pointer" }} />
                        <label className="form-check-label" htmlFor="all" style={{ cursor: "pointer" }}>All</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="Male"
                            checked={radioData === "Male"} style={{ cursor: "pointer" }}
                            onChange={(e) => { setRadioData(e.target.value); }} />
                        <label className="form-check-label" htmlFor='male' style={{ cursor: "pointer" }}>Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="female" value="Female" style={{ cursor: "pointer" }}
                            checked={radioData === "Female"}
                            onChange={(e) => { setRadioData(e.target.value); }} />
                        <label className="form-check-label" htmlFor="female" style={{ cursor: "pointer" }}>Female</label>
                    </div>
                </div>
                {/* Gender End */}
                <Table className='table w-100 text-center' striped bordered hover
                    style={{ borderRadius: "20px", boxShadow: "0px 8px 15px 1px black" }} >
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Student Age</th>
                            <th>Student Email</th>
                            <th>Student Phone</th>
                            <th>User Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.filter((value) => {
                                if (userSearch.length === 0) {
                                    return value;
                                }
                                else {
                                    return value.name.toLowerCase().includes(userSearch.toLowerCase());
                                }
                            }).filter((value) => {
                                if (radioData == "Male") {
                                    return value.gender === radioData;
                                } else if (radioData == "Female") {
                                    return value.gender === radioData;
                                } else {
                                    return value
                                }
                            }).map((value) => {
                                return (
                                    <tr key={value.id} align="center" valign="middle">
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td>
                                            <NavLink to={`/update-page/${value.id}`}>
                                                <button className='btn btn-success'> Update </button>
                                            </NavLink>

                                            <NavLink to={`/delete-page/${value.id}`}>
                                                <button className='btn btn-danger mx-1'> Delete </button>
                                            </NavLink>

                                            <NavLink to={`/read-page/${value.id}`}>
                                                <button className='btn btn-warning'> Read </button>
                                            </NavLink>

                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </center>
        </div>
    );
}

export default HomePage;