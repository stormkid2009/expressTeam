import React,{Component} from 'react';
import axios from 'axios';
import Order from './order';



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
            status:this.state.status,
            agentCode:"default"
        }
        
        axios.post("http://localhost:5000/orders/update/" + this.state.id,order)
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
    doneList () {
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

    pendingList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "pending").map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }

    onprogressList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "onprogress").map(currentOrder =>{
            return <Order order={currentOrder} />
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
                    <option value="onprogress">onProgress</option>
                    <option value="delivered">Delivered</option>
                    <option value="rejected">Rejected</option>
                    <option value="refused">Refused</option>
                </select>
                
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
                            <th>Agent Code</th>
                            <th>..Comission</th>
                            <th>Exp-Fee</th>
                            <th>Date</th>
                            <th>Notes..</th>
                            <th>order ID</th>
                        </tr>
                        </thead>
                        <tbody >
                            {list === "pending"? this.pendingList():list === "onprogress" ? this.onprogressList():
                            list === "delivered" ? this.doneList():list === "rejected" ? this.rejectedList():
                            list === "refused" ? this.refusedList():<h4>nothing to display</h4>}
                        </tbody>
                        </table>
                </div>
                <h5 style={{textAlign:"center",color:"purple"}}>Update an Order</h5>
                <div style={{padding:"10px",borderStyle:"inset"}}>
                    <div style={{padding:"10px"}}>
                        <label style={{padding:"10px"}}> Enter Order ID</label>
                        <input value={id} onChange={this.handleID}/>
                    </div>
                    
                    
                    <div style={{padding:"10px"}}>
                        
                        <select className ="form-select" aria-label="Default select example"
                        onChange={this.handleChange}>
                            <option selected>Change order Status</option>
                            <option value="delivered">Delivered</option>
                            <option value="rejected">Rejected</option>
                            <option value="refused">Refused</option>
                        </select>
                    </div>
                    <div style={{padding:"10px" ,display:'flex',justifyContent:'space-evenly'}}>
                        <button className="btn btn-outline-primary" onClick={this.handleUpdate}>Update Status</button>
                        <button className="btn btn-outline-danger" onClick={this.handleDelete}>Delete order</button>
                    </div>
                    

                </div>
                
            </div>
        )
    }
    
}


