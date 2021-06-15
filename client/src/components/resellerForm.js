import React,{useState } from 'react';
import axios from 'axios';


const style = {
    padding:'10px'
    
};
const header ={
    color:'purple',
    textAlign:'center'
};
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
            _id:resellerCode
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
                        <label style={style}>Name of Reseller or Company</label>
                        <input type="text" onChange={handleName} value={name}/>
                        <label style={style}>Address</label>
                        <input type="text" onChange={handleAddress} value={address}/>
                </div>
                
                <div className="form-control" >
                        <label style={style}>Phone Number</label>
                        <input type="text" onChange={handlePhone} value={phone}/>
                        <label style={style}>Code of Reseller or Company</label>
                        <input type="text" onChange={handleResellerCode} value={resellerCode}/>
                </div>
                
                <div className="form-control" style={{
                    display:'flex',justifyContent:'center'
                }}>
                        <button  className="btn btn-primary"
                        onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Reseller
