import React,{useState } from 'react';
import axios from 'axios';
import { padding,header,center } from './modules/styles';



function Reseller() {
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const [resellerID,setResellerID]=useState('');

    const handleName =(e)=>{
        setName(e.target.value);
        
    }

    const handleAddress =(e)=>{
        setAddress(e.target.value);
        
    }

    const handlePhone =(e)=>{
        setPhone(e.target.value);
        
    }

    const handleResellerID =(e)=>{
        setResellerID(e.target.value);
        
    }

    const handleSubmit =()=>{
        const reseller = {
            name:name,
            address:address,
            phone:phone,
            _id:resellerID,
            credit:0
        }
        axios.post("http://localhost:5000/resellers/add",reseller)
        .then(res => console.log(res.data))
        window.location='/';
    }
    return (
        <div>
            <h4 style={header}>Add new Reseller</h4>
            <div className="form-group">
                <div className="form-control" >
                        <label style={padding}>Name of Reseller or Company</label>
                        <input type="text" onChange={handleName} value={name}/>
                        <label style={padding}>Address</label>
                        <input type="text" onChange={handleAddress} value={address}/>
                </div>
                
                <div className="form-control" >
                        <label style={padding}>Phone Number</label>
                        <input type="text" onChange={handlePhone} value={phone}/>
                        <label style={padding}>Code of Reseller or Company</label>
                        <input type="text" onChange={handleResellerID} value={resellerID}/>
                </div>
                
                <div className="form-control" style={center}>
                        <button  className="btn btn-primary"
                        onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Reseller
