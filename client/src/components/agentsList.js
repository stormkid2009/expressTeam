import React,{Component} from 'react';
import axios from 'axios';
import Agent from './agent';


export default class AgentsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            agents:[],
            list:"",
            id:""
        }
        this.handleList = this.handleList.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleID = this.handleID.bind(this);
    }
    componentDidMount() {
        axios.get("http://localhost:5000/agents/")
        .then(response => this.setState({agents:response.data}))
        .catch(err => console.log(err))
    }

    handleList =(e)=>{
        this.setState({list:e.target.value})
    }
    handleID = (e) =>{
        this.setState({id:e.target.value});
    }
    handleDelete =()=>{
        axios.delete("http://localhost:5000/agents/" + this.state.id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        window.location = "/";
    }
    hiredAgentsList(){
        return this.state.agents.filter(currentAgent => currentAgent.status === "hired").map(currentAgent =>{
            return <Agent agent={currentAgent} />;
        })
    }
    freeAgentsList(){
        return this.state.agents.filter(currentAgent => currentAgent.status === "free").map(currentAgent =>{
            return <Agent agent={currentAgent} />;
        })
    }
    render(){
        let {list,id} = this.state;
        return (
            <div>
                <select className ="form-select" aria-label="Default select example"
                onChange={this.handleList}>
                    <option selected>choose via agent status</option>
                    <option value="free">Free Agents</option>
                    <option value="hired">Hired Agents</option>
                    
                </select>
                
                    <div >
                        
                        <table className="table table-hover table-dark table-bordered ">
                        <thead className="table-secondary">
                            <tr >
                                
                                <th>Agent Name</th>
                                <th>Agent Phone Number</th>
                                <th>Agent status</th>
                                <th>Agent ID</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                                {list === "hired" ? this.hiredAgentsList():list=== "free"? this.freeAgentsList():console.log("")}
                            </tbody>
                            </table>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div >
                            <label style={{paddingRight:"10px"}}> Agent ID ....</label>
                            <input value={id} onChange={this.handleID}/>
                        </div>
                        <div>
                            <span style={{color:"red"}}>Be careful this agent will be removed permenantly</span>
                        </div>
                        <div>
                            <button className="btn btn-outline-danger" onClick={this.handleDelete}>Delete Agent</button>
                        </div>
                        
                    </div>
                    
            </div>
        )
    }
    
}


