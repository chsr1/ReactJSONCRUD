import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const [ID, IDChange] = useState("");
    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ID, name, email, phone});
        const empData = {name, email, phone};

        fetch("http://localhost:3000/posts", 
        {
            method:"post", headers: {"content-type":"application/json"},
            body:JSON.stringify(empData)
        }
        )

        .then((res) => {
            alert("Record saved successfully");
            navigate('/');
        })
        .catch((err) => {
            console.log(err.message);
        })

    }

    return(
        <div className = "row">
            <div className="offset-lg-3 col-lg-6">

                <form className = "container" onSubmit={handleSubmit}>

                    <div className = "card" style = {{"textAlign":"left"}}>

                        <div className = "card-title">
                            <h2>Create Employee</h2>
                        </div>
                        <div className = "card-body">
                            <div className = "row">
                                
                                <div className = "col-lg-12">
                                    <div className = "form-group">
                                        <label>Employee ID</label>
                                        <input type = "text" className="form-control" value = {ID} disabled = "disabled"></input>
                                    </div>
                                </div>

                                <div className = "col-lg-12">
                                    <div className = "form-group">
                                        <label>Employee Name</label>
                                        <input type = "text" className="form-control" value = {name} onChange = {e => nameChange(e.target.value)}></input>
                                    </div>
                                </div>

                                <div className = "col-lg-12">
                                    <div className = "form-group">
                                        <label>Employee Email</label>
                                        <input type = "text" className="form-control" value = {email} onChange = {f => emailChange(f.target.value)}></input>
                                    </div>
                                </div>

                                <div className = "col-lg-12">
                                    <div className = "form-group">
                                        <label>Employee Phone</label>
                                        <input type = "text" className="form-control" value = {phone} onChange = {g => phoneChange(g.target.value)}></input>
                                    </div>
                                </div>

                                <div className = "col-lg-12">
                                    <div className = "form-group">
                                        <button className="btn btn-success" type = "submit">SAVE</button>
                                        <Link to = '/' className="btn btn-danger">BACK</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EmpCreate;
