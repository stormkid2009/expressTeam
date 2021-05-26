import React,{Component} from 'react';
import axios from 'axios';

function Order(props) {
    return (
        <tr>
        <td>{props.order._id}</td>
        <td>{props.order.item}</td>
        <td>{props.order.itemFormat}</td>
        <td>{props.order.recipientName}</td>
        <td>{props.order.recipientAddress}</td>
        <td>{props.order.recipientPhone}</td>
        <td>{props.order.totalCost}</td>
        <td>{props.order.paymentFormat}</td>
        <td>{props.order.agentID}</td>
        <td>{props.order.agentCommission}</td>
        <td>{props.order.expressFee}</td>
        <td>{props.order.date.substring(0,10)}</td>
        <td>{props.order.duration}</td>
    </tr>
    )
}


export default class OrdersList extends Component{
    constructor(props){
        super(props);
        this.state = {
            orders:[]
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/orders/")
        .then(res => this.setState({orders:res.data}))
        .catch(err => console.log(err))
    }
    doneList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "done").map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }
    refusedList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "refused").map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }

    unknownList () {
        return this.state.orders.filter(currentOrder => currentOrder.status === "unknown").map(currentOrder =>{
            return <Order order={currentOrder} />
        })
    }
    render(){
        return (
            <div>
                <h3>List of delivered orders</h3>
                <div style={{border:"2px solid black" , margin:"30px 10px" ,padding:"30px"}}>
                    
                    <table className="table">
                        <tr className="thead-light">
                        <th>ID</th>
                            <th>Item</th>
                            <th>Format</th>
                            <th>To..</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Total</th>
                            <th>payment</th>
                            <th>agentID</th>
                            <th>agentCom</th>
                            <th>Exp-Fee</th>
                            <th>Date</th>
                            <th>Duration</th>
                        </tr>
                        <tbody>
                            {this.doneList()}
                        </tbody>
                        </table>
                </div>
                <h3>List of Refused orders</h3>
                <div style={{border:"2px solid black" , margin:"30px 10px" ,padding:"30px"}}>
                    
                    <table className="table">
                        <tr className="thead-light">
                        <th>ID</th>
                            <th>Item</th>
                            <th>Format</th>
                            <th>To..</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Total</th>
                            <th>payment</th>
                            <th>agentID</th>
                            <th>agentCom</th>
                            <th>Exp-Fee</th>
                            <th>Date</th>
                            <th>Duration</th>    
                        </tr>
                        <tbody>
                            {this.refusedList()}
                        </tbody>
                        </table>
                </div>
                <h3>List of Unkown Orders</h3>
                <div style={{border:"2px solid black" , margin:"10px 10px" ,padding:"10px"}}>
                <table className="table">
                        <tr className="thead-light">
                            <th>ID</th>
                            <th>Item</th>
                            <th>Format</th>
                            <th>To..</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Total</th>
                            <th>payment</th>
                            <th>agentID</th>
                            <th>agentCom</th>
                            <th>Exp-Fee</th>
                            <th>Date</th>
                            <th>Duration</th>
                        </tr>
                        <tbody>
                            {this.unknownList()}
                        </tbody>
                        </table>
                </div>
            </div>
        )
    }
    
}


