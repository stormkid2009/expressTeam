import React,{Component} from 'react';
import axios from 'axios';

const Agent = props =>(
    <tr>
        <td>{props.agent._id}</td>
        <td>{props.agent.name}</td>
        <td>{props.agent.phone}</td>
    </tr>
)

export default class AgentsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            agents:[]
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/agents/")
        .then(response => this.setState({agents:response.data}))
        .catch(err => console.log(err))
    }
    busyAgentsList(){
        return this.state.agents.filter(currentAgent => currentAgent.status === "busy").map(currentAgent =>{
            return <Agent agent={currentAgent} />;
        })
    }
    freeAgentsList(){
        return this.state.agents.filter(currentAgent => currentAgent.status === "free").map(currentAgent =>{
            return <Agent agent={currentAgent} />;
        })
    }
    render(){
        return (
            <div>
                <h3>List of delivered Orders</h3>
                    <div style={{border:"2px solid black" , margin:"30px 10px" ,padding:"30px"}}>
                        
                        <table className="table">
                            <tr className="thead-light">
                                <th>Request ID</th>
                                <th>Agent Name</th>
                                <th>Agent Phone Number</th>
                                
                            </tr>
                            <tbody>
                                {this.busyAgentsList()}
                            </tbody>
                            </table>
                    </div>
                    <h3>List of undelivered Orders</h3>
                    <div style={{border:"2px solid black" , margin:"30px 10px" ,padding:"30px"}}>
                        
                        <table className="table">
                            <tr className="thead-light">
                                <th>Agent ID</th>
                                <th>Agent Name</th>
                                <th>Agent Phone Number</th>
                                
                                
                            </tr>
                            <tbody>
                                {this.freeAgentsList()}
                            </tbody>
                            </table>
                    </div>
            </div>
        )
    }
    
}


