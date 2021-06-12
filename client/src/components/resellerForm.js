import React,{useState } from 'react';
import axios from 'axios';

function Reseller() {
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const [resellerCode,setResellerCode]=useState('');

    const handleName =(e)=>{
        setName(e.target.value);
        
    }

    const handleAddress =(e)=>{
        setAddress(e.target.value);
        
    }

    const handlePhone =(e)=>{
        setPhone(e.target.value);
        
    }

    const handleResellerCode =(e)=>{
        setResellerCode(e.target.value);
        
    }

    const handleSubmit =()=>{
        const reseller = {
            name:name,
            address:address,
            phone:phone,
            resellerCode:resellerCode
        }
        axios.post("http://localhost:5000/resellers/add",reseller)
        .then(res => console.log(res.data))
        window.location='/';
    }
    return (
        <div>
            <h3>Add new Reseller</h3>
            <div>
                <div className="form-group">
                        <label>Name of Reseller or Company</label>
                        <input type="text" onChange={handleName} value={name}
                        className="form-control" />
                </div>
                <div className="form-group">
                        <label>Address</label>
                        <input type="text" onChange={handleAddress} value={address}
                        className="form-control" />
                </div>
                <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" onChange={handlePhone} value={phone}
                        className="form-control" />
                </div>
                <div className="form-group">
                        <label>Code of Reseller or Company</label>
                        <input type="text" onChange={handleResellerCode} value={resellerCode}
                        className="form-control" />
                </div>
                <div className="form-group">
                        <button  className="btn btn-primary"
                        onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Reseller
