import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [EmpData, EmpDataChange] = useState(null);

    const navigate = useNavigate();
    const loadDetail = (empId) => {
        navigate("/posts/detail/" + empId);
    };
    const loadEdit = (empId) => {navigate("/posts/edit/" + empId)};

    const removeFunction = (empId) => {
        if(window.confirm("Do you want to remove the record?")){
            fetch("http://localhost:3000/posts/" + empId,{
                method:"DELETE"
            }).then((res) => {
                alert("Record removed successfully");
                window.location.reload();
            }).catch((err) => {
                console.log(err.message);
            })
        }
    };

    useEffect(() => {
        fetch("http://localhost:3000/posts")
        .then((res) => {
            return res.json();
        })

        .then((var1) => {
            EmpDataChange(var1);
            console.log(var1);
        })
        .catch((err) => {
            console.log(err.message);
        })
        
    },[])

    return(
        <div className = "container">
            <div className = 'card'>
                <div className = "card-title">
                    <h1>Employee Listing</h1>
                </div>
                <div className ="card-body">
                    <div className = "divBTN">
                        <Link to = "posts/create" className = "btn btn-success">add new</Link>
                    </div>

                <table className = 'table table-border'>
                    <thead className = "bg-dark text-white">
                        <tr>
                            <td>ID</td>
                            <td>NAME</td>
                            <td>EMAIL</td>
                            <td>PHONE</td>
                            <td>ACTION</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            EmpData && EmpData.map(var2 => (
                                <tr key = {var2.id}>
                                    <td>{var2.id}</td>
                                    <td>{var2.name}</td>
                                    <td>{var2.email}</td>
                                    <td>{var2.phone}</td>
                                    <td>
                                        <a onClick = {() => {loadEdit(var2.id)}} className="btn btn-success">edit</a>
                                        <a onClick = {() => {removeFunction(var2.id)}} className = "btn btn-danger">remove</a>
                                        <a onClick = {() => {loadDetail(var2.id)}} className = "btn btn-primary">Details</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                
                </div>
            </div>
        </div>
    )
}
export default EmpListing;

