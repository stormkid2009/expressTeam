
import React, {Component} from 'react';
import axios from 'axios';
import { center,header,padding } from './modules/styles';


export default class Agent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            phone : '',
            status : 'free',
            id:''
            
        }
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleID = this.handleID.bind(this);
        
        
    }
    

    handleID=(e)=>{
        this.setState({id:e.target.value});
    }

     handleName =(e)=>{
        this.setState({name:e.target.value});
        
    }

    handlePhone =(e)=>{
        this.setState({phone:e.target.value});
        
    }

    handleSubmit = () =>{
        
        const agent = {
            name:this.state.name,
            phone:this.state.phone,
            _id:this.state.id,
            status:this.state.status,
            
        }
        axios.post('http://localhost:5000/agents/add', agent)
        .then(res => console.log(res.data));

        window.location = '/';

    }

    render(){
        const {id} = this.state;
        return (
            <div>
                        
                
                <div className="form-control" style={{
                    padding:"10px"
                }}>
                    <h4 style={header}>Register new Agent down below</h4>
                </div>
                
                <div className="form-group">
                    <div className="form-control">
                        <label style={padding}>Agent full name</label>
                        <input type="text" onChange={this.handleName} value={this.state.name}
                        />
                        <label style={padding}>Agent Phone ..</label>
                        <input type="text" onChange={this.handlePhone} value={this.state.phone}
                        />
                        <label style={padding}>Agent ID ..</label>
                        <input type="text" onChange={this.handleID} value={id}
                        />
                    </div>
                    <div className="form-control" style={center}>
                        <button  className="btn btn-primary"
                        onClick={this.handleSubmit}>Submit</button>
                    </div>
    
                </div>
                
            </div>
        )
    }
    
}


