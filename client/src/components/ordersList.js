import React,{Component} from 'react';
import axios from 'axios';
import Order from './order';
import { padding ,header} from './modules/styles';
import unique from './modules/key'



export default class OrdersList extends Component{
    constructor(props){
        super(props);
        this.state = {
            orders:[],
            list:"",
            id:"",
            status:""
        }
        this.handleList = this.handleList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleID = this.handleID.bind(this);
    }
    componentDidMount() {
        axios.get("http://localhost:5000/orders/")
        .then(res => this.setState({orders:res.data}))
        .catch(err => console.log(err))
    }

    handleList =(e)=>{
        this.setState({list:e.target.value});
    }

    handleChange =(e)=>{
        this.setState({status:e.target.value});
    }

    handleUpdate =()=>{
        //axios request to update status
        const order = {
            status:this.state.status
            
        }
        //send request to edit the status of the order
        axios.post("http://localhost:5000/orders/status/" + this.state.id,order)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        window.location = "/";
    }
    handleDelete =()=>{
        //axios request to delete order
        axios.delete("http://localhost:5000/orders/" + this.state.id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        window.location = "/";
    }
    handleID =(e)=>{
        this.setState({id:e.target.value});
    }

    deliveredList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "delivered").map(currentOrder =>{
            return <Order order={currentOrder} key={unique()} />
        })
    }
    refusedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "refused").map(currentOrder =>{
            return <Order order={currentOrder} key={unique()} />
        })
    }

    rejectedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "rejected").map(currentOrder =>{
            return <Order order={currentOrder} key={unique()} />
        })
    }

    pendingList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "pending").map(currentOrder =>{
            return <Order order={currentOrder} key={unique()} />
        })
    }

    chargedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "charged").map(currentOrder =>{
            return <Order order={currentOrder} key={unique()}/>
        })
    }
    render(){
        const {list,id} = this.state;
        
            
        return (
            <div>
                <select className ="form-select" aria-label="Default select example"
                onChange={this.handleList}>
                    <option selected>choose via order status</option>
                    <option value="pending">Pending</option>
                    <option value="charged">Charged</option>
                    <option value="delivered">Delivered</option>
                    <option value="rejected">Rejected</option>
                    <option value="refused">Refused</option>
                </select>
                
                <div >
                    <table className="table table-hover table-dark table-bordered " >
                        <thead className="table-secondary">
                            <tr >
                                <th>Res ID</th>
                                <th>Item</th>
                                <th>Client</th>
                                <th>Address..</th>
                                <th>Phone</th>
                                <th>Total cost</th>
                                <th>Agent ID</th>
                                <th>Comission..</th>
                                <th>Exp-Fee</th>
                                <th>Date</th>
                                <th>Notes..</th>
                                <th>order ID</th>
                            </tr>
                        </thead>
                        <tbody >
                            {list === "pending"? this.pendingList():list === "charged" ? this.chargedList():
                            list === "delivered" ? this.deliveredList():list === "rejected" ? this.rejectedList():
                            list === "refused" ? this.refusedList():<h4>nothing to display</h4>}
                        </tbody>
                        </table>
                </div>
                <h5 style={header}>Update Charged Order Status</h5>
                <div style={{padding:"10px",borderStyle:"inset"}}>
                    <div style={padding}>
                        <label style={padding}> Enter Order ID</label>
                        <input value={id} onChange={this.handleID}/>
                    </div>
                    
                    
                    <div style={padding}>
                        
                        <select className ="form-select" aria-label="Default select example"
                        onChange={this.handleChange}>
                            <option selected>Change order Status</option>
                            <option value="delivered">Delivered</option>
                            <option value="rejected">Rejected</option>
                            <option value="refused">Refused</option>
                        </select>
                    </div>
                    <div style={{padding:"10px" ,display:'flex',justifyContent:'space-evenly'}}>
                        <button className="btn btn-outline-primary" onClick={this.handleUpdate}>Update order Status</button>
                        <button className="btn btn-outline-danger" onClick={this.handleDelete}>Delete order</button>
                    </div>
                    

                </div>
                
            </div>
        )
    }
    
}


