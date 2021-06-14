
import React, {Component} from 'react';
import axios from 'axios';


export default class Agent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            phone : '',
            agentID: '',
            status : 'free'
        }
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleAgentID = this.handleAgentID.bind(this);
        
    }
    

     handleName =(e)=>{
        this.setState({name:e.target.value});
        
    }

    handlePhone =(e)=>{
        this.setState({phone:e.target.value});
        
    }

    handleAgentID =(e)=>{
        this.setState({agentID:e.target.value})
    }


    
    
    handleSubmit = () =>{
        
        const agent = {
            name:this.state.name,
            phone:this.state.phone,
            _id:this.state.agentID,
            status:this.state.status,
            
        }
        axios.post('http://localhost:5000/agents/add', agent)
        .then(res => console.log(res.data));

        window.location = '/';

    }
    render(){
        return (
            <div>
                <h3>Add new Agent...</h3>
                <div>
                    <div className="form-group">
                        <label>Agent full name</label>
                        <input type="text" onChange={this.handleName} value={this.state.name}
                        className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label>Agent Phone ..</label>
                        <input type="text" onChange={this.handlePhone} value={this.state.phone}
                        className="form-control"  />
                    </div>

                    <div className="form-group">
                        <label>Agent ID ..</label>
                        <input type="text" onChange={this.handleAgentID} value={this.state.agentID}
                        className="form-control"  />
                    </div>

                    
                    
                    
                    <div className="form-group">
                        <button  className="btn btn-primary"
                        onClick={this.handleSubmit}>Submit</button>
                    </div>
    
    
    
                </div>
                
            </div>
        )
    }
    
}


