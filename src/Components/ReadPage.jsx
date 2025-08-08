import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { readData } from "../CurdRedux/Slices/CurdSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';



function ReadPage(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.allCurd.data);

    let singleUserData = userData.filter((value) => value.id === id);

    useEffect(() => {
        dispatch(readData());
    }, []);


    return (
        <div>
            <h1 style={{ textAlign: "center", color: "#d33525" }}>
                <u>
                    User Read Data
                </u>
            </h1>
            <div className='d-flex w-100 mt-3 justify-content-center align-items-center'>
                {
                    singleUserData.map((item, index) => {
                        return (
                            <div key={index}>
                                <Card style={{ width: '25rem', height: "20px", boxShadow: "0px 10px 15px 1px black" }} >
                                    <Card.Img variant="top" src="" className='img_box' />
                                    <Card.Body className='text-center' style={{ backgroundColor: "#f7dc6f", color: "red" }} >
                                        <Card.Title>{`User ID : ${item.id}`}</Card.Title>
                                        <Card.Title>{`User Name : ${item.name}`}</Card.Title>
                                        <Card.Title>{`User Age : ${item.age}`}</Card.Title>
                                        <Card.Title>{`User Gender : ${item.gender}`}</Card.Title>
                                        <Card.Title>{`User Email : ${item.email}`}</Card.Title>
                                        <Card.Title>{`User Phone : ${item.phone}`}</Card.Title>
                                        <Card.Title>{`User Address : ${item.city}`}</Card.Title>

                                        <Link to='/'>
                                            <Button variant="primary">Go Back Home </Button>
                                        </Link>
                                        <Link to={`/update-page/${item.id}`}>
                                            <Button variant="warning" className='mx-5'> Edit Data </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default ReadPage;