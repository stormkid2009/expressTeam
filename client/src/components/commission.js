import React, { Component } from 'react';
import axios from 'axios';
import Order from './order';
import { center,padding,header } from './modules/styles';


export default class Comission extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             orders:[],
             list:'',
             id:'',
             status:"free"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleID = this.handleID.bind(this);
        this.handleList = this.handleList.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:5000/orders/')
        .then(res => this.setState({orders:res.data}))
        .catch(err => console.log(err))
    }

    deliveredList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "delivered" && currentOrder.agentID === this.state.id)
        .map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }

    refusedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "refused" && currentOrder.agentID === this.state.id)
        .map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }

    rejectedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "rejected" && currentOrder.agentID=== this.state.id)
        .map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }
    
    handleChange =()=>{
        const {status,id} = this.state;
        axios.post('http://localhost:5000/agents/update/' + id,{status:status})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        this.setState({id:""});
        window.location = '/'
        
    }

    handleList =(e)=>{
        this.setState({list:e.target.value});
    }

    handleID =(e)=>{
        this.setState({id:e.target.value})
    }

    render() {
        const {list,id} = this.state;
        return (
            <div>
                <h5 style={header}>Manage Agent Commissions</h5>
                    <div className="form-control" style={{
                    display:'flex',justifyContent:'space-between',color:'blue'
                }}>
                    <div>
                        <label style={padding}>Enter Agent ID</label>
                        <input value={id} onChange={this.handleID}/>
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
            </div>
        );
    }
}

