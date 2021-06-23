import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeDetail() {
    const [search, setSearch] = useState("");
    const [record, setRecord] = useState([]);

    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        salary: "",
    });

    //  Object Destructuring
    const { fname, lname, email, phone, salary } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // On Page load display all records
    const loadEmployeeDetail = async () => {
        axios.get(`http://localhost:3001/api/v1/employee`).then((response) => {
            setRecord(response.data);
        });
    };
    useEffect(() => {
        loadEmployeeDetail();
    }, []);

    // Insert Employee Records
    const submitEmployeeRecord = async (e) => {
        e.preventDefault();
        e.target.reset();
        await axios.post("http://localhost:3001/api/v1/employee", user);
        alert("Data Inserted");

        loadEmployeeDetail();
    };

    // Search Records here
    const searchRecords = () => {
        alert(search);
        axios
            .get(`http://localhost:3001/api/v1/employee/searchRecord/${search}`)
            .then((response) => {
                setRecord(response.data);
            });
    };

    // Delete Employee Record
    const deleteRecord = (productId) => {
        axios
            .delete(`http://localhost:3001/api/v1/employee/${productId}`)
            .then((result) => {
                loadEmployeeDetail();
            })
            .catch(() => {
                alert("Error in the Code");
            });
    };

    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">
                                Detail
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">
                                Address
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                <h4 className="mb-3 text-center mt-4">
                    CRUD Operation in MERN
                </h4>
                <div class="row mt-3">
                    <div class="col-sm-4">
                        <div
                            className="box p-3 mb-3 mt-5"
                            style={{ border: "1px solid #d0d0d0" }}
                        >
                            <form onSubmit={submitEmployeeRecord}>
                                <h5 className="mb-3 ">
                                    Insert Employee Records
                                </h5>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control  mb-4"
                                        name="fname"
                                        value={fname}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="Enter name"
                                        required=""
                                    />
                                </div>

                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control  mb-4"
                                        name="lname"
                                        value={lname}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="Enter Sirname"
                                        required=""
                                    />
                                </div>

                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control mb-4"
                                        name="email"
                                        value={email}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="Enter Email"
                                        required=""
                                    />
                                </div>

                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control mb-4"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="Enter Phone"
                                        required=""
                                    />
                                </div>

                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control mb-2"
                                        name="salary"
                                        value={salary}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder="Enter Salary"
                                        required=""
                                    />
                                </div>
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block mt-4"
                                >
                                    Insert Record
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <h5 class="text-center  ml-4 mt-4  mb-5">
                            View Records
                        </h5>
                        <div class="input-group mb-4 mt-3">
                            <div class="form-outline">
                                <input
                                    type="text"
                                    id="form1"
                                    onChange={(e) => setSearch(e.target.value)}
                                    class="form-control"
                                    placeholder="Search Employee Here"
                                    style={{ backgroundColor: "#ececec" }}
                                    required="true"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={searchRecords}
                                className="btn btn-success"
                            >
                                Search
                            </button>
                        </div>
                        <table class="table table-hover  table-striped table-bordered ml-4 ">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {record.map((name) => (
                                    <tr>
                                        <td>{name.first_name}</td>
                                        <td>{name.last_name}</td>
                                        <td>{name.email}</td>
                                        <td>{name.phone}</td>
                                        <td>{name.salary}</td>
                                        <td>
                                            <Link
                                                style={{ marginRight: "10px" }}
                                                className="btn btn-outline-warning btn-sm"
                                                to={`/EditEmployee/editID/${name.id}`}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-outline-danger btn-sm mr-2"
                                                onClick={() => {
                                                    const confirmBox =
                                                        window.confirm(
                                                            "Do you really want to delete " +
                                                                name.first_name
                                                        );
                                                    if (confirmBox === true) {
                                                        deleteRecord(name.id);
                                                    }
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EmployeeDetail;
