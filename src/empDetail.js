import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {

    const {empID} = useParams();
    const [empData, EmpDataChange] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/posts/" + empID)
        .then((res) => {return(res.json())})
        .then((response) => {EmpDataChange(response);})
        .catch((err) => {console.log(err.message);})

    },[]);

    return(
        <div>
              <div className="container">
                    <div className="card row" style={{ "textAlign": "left" }}>
                        <div className="card-title">
                            <h2>Employee Create</h2>
                        </div>

                        <div className="card-body">

                        {empData &&
                            <div>
                                <h2>The Employee name is : <b>{empData.name}</b>  ({empData.id})</h2>
                                <h3>Contact Details</h3>
                                <h5>Email is : {empData.email}</h5>
                                <h5>Phone is : {empData.phone}</h5>
                                <Link className="btn btn-danger" to="/">Back to Listing</Link>
                            </div>
                        }
                        </div>
                    </div>
                </div>

            </div>
    );
}
export default EmpDetail;
