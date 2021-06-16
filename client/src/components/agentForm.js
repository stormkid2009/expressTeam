
import React, {Component} from 'react';
import axios from 'axios';
import Order from './order';

const center = {
    display:'flex',
    justifyContent:'center'
};
const header ={
    color:'purple',
    textAlign:'center'
};
export default class Agent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            phone : '',
            agent_ID: '',
            status : 'free',
            id:'',
            list:'',
            orders:[]
        }
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleAgentID = this.handleAgentID.bind(this);
        this.handleID = this.handleID.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    componentDidMount(){
        axios.get('http://localhost:5000/orders/')
        .then(res => this.setState({orders:res.data}))
        .catch(err => console.log(err))
    }

    handleID=(e)=>{
        this.setState({id:e.target.value});
    }

    handleList =(e)=>{
        this.setState({list:e.target.value});
    }

    handleChange =()=>{
        const {status,agent_ID} = this.state;
        axios.post('http://localhost:5000/agents/update/' + agent_ID,{status:status})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        this.setState({agent_ID:""});
        window.location = '/'
        
    }
     handleName =(e)=>{
        this.setState({name:e.target.value});
        
    }

    handlePhone =(e)=>{
        this.setState({phone:e.target.value});
        
    }

    handleAgentID =(e)=>{
        this.setState({agent_ID:e.target.value})
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

    deliveredList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "delivered" && currentOrder.agentID === this.state.agent_ID)
        .map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }


    refusedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "refused" && currentOrder.agentID === this.state.agent_ID)
        .map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }

    rejectedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "rejected" && currentOrder.agentID=== this.state.agent_ID)
        .map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }

    render(){
        const {list,id,agent_ID} = this.state;
        return (
            <div>
                <div className="form-control" style={{
                    display:'flex',justifyContent:'space-between',color:'blue'
                }}>
                    <div>
                        <label style={{padding:'8px'}}>Enter Agent ID</label>
                        <input value={agent_ID} onChange={this.handleAgentID}/>
                    </div>
                
                <select 
                onChange={this.handleList}>
                    <option selected>choose via order status</option>
                    <option value="delivered">Delivered</option>
                    <option value="rejected">Rejected</option>
                    <option value="refused">Refused</option>
                </select>
                </div>
                
                
                <div >
                    <table className="table table-hover table-dark table-bordered " >
                        <thead className="table-secondary">
                        <tr >
                        
                            <th>Item</th>
                            <th>Res Code</th>
                            <th>Client</th>
                            <th>..Address</th>
                            <th>..Phone</th>
                            <th>Total cost</th>
                            <th>Agent ID</th>
                            <th>..Comission</th>
                            <th>Exp-Fee</th>
                            <th>Date</th>
                            <th>Notes..</th>
                            <th>order ID</th>
                        </tr>
                        </thead>
                        <tbody >
                            {list === "pending"? this.pendingList():list === "charged" ? this.chargedList():
                            list === "delivered" ? this.deliveredList():list === "rejected" ? this.rejectedList():
                            list === "refused" ? this.refusedList():console.log("nothing to display")}
                        </tbody>
                        </table>
                </div>
                <div className="form-control" style={center}>
                    
                    <button onClick={this.handleChange} className="btn btn-danger">Set agent status : free</button>
                </div>
                <div className="form-control" style={{
                    padding:"10px"
                }}>
                    <h4 style={header}>Register new Agent down below</h4>
                </div>
                
                <div className="form-group">
                    <div className="form-control">
                        <label style={{padding:"15px 10px"}}>Agent full name</label>
                        <input type="text" onChange={this.handleName} value={this.state.name}
                        />
                        <label style={{padding:"15px 10px"}}>Agent Phone ..</label>
                        <input type="text" onChange={this.handlePhone} value={this.state.phone}
                        />
                        <label style={{padding:"15px 10px"}}>Agent ID ..</label>
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


