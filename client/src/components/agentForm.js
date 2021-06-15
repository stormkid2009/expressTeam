
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
            agentID: '',
            status : 'free',
            id:'',
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
    handleChange =()=>{
        const {status,id} = this.state;
        axios.post('http://localhost:5000/agents/update/' + id,{status:status})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        this.setState({id:""});
        
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

    deliveredList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "delivered").map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }

    
    refusedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "refused").map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }

    rejectedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "rejected").map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }

    render(){
        return (
            <div>
                <div>agent account will be here!! agentid status date to display agent orders
                    and agent status will be set to free here too.
                </div>
                <div>
                    <input value={this.state.id} onChange={this.handleID}/>
                    <button onClick={this.handleChange}>change agent status</button>
                </div>
                <h4 style={header}>Add new Agent...</h4>
                <div className="form-group">
                    <div className="form-control">
                        <label style={{padding:"15px 10px"}}>Agent full name</label>
                        <input type="text" onChange={this.handleName} value={this.state.name}
                        />
                        <label style={{padding:"15px 10px"}}>Agent Phone ..</label>
                        <input type="text" onChange={this.handlePhone} value={this.state.phone}
                        />
                        <label style={{padding:"15px 10px"}}>Agent ID ..</label>
                        <input type="text" onChange={this.handleAgentID} value={this.state.agentID}
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


