import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
            resellerCode:'',
            item:'',
            itemFormat : '',
            recipientName:'',
            recipientAddress:'',
            recipientPhone:'',
            totalCost:0,
            paymentFormat:'',
            agentCode:'default',
            agentCommission:0,
            expressFee:0,
            date: new Date(),
            duration:0,
            status:"pending"
            
        }
        this.handleResellerCode = this.handleResellerCode.bind(this);
        this.handleItem = this.handleItem.bind(this);
        this.handleItemFormat = this.handleItemFormat.bind(this);
        this.handleRecipientName = this.handleRecipientName.bind(this);
        this.handleRecipientAddress = this.handleRecipientAddress.bind(this);
        this.handleRecipientPhone = this.handleRecipientPhone.bind(this);
        this.handleTotalCost = this.handleTotalCost.bind(this);
        this.handlePaymentFormat = this.handlePaymentFormat.bind(this);
        this.handleAgentCode = this.handleAgentCode.bind(this);
        this.handleAgentCommission = this.handleAgentCommission.bind(this);
        this.handleExpressFee = this.handleExpressFee.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleDuration = this.handleDuration.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
    }
    

    handleResellerCode=(e)=>{
        this.setState({resellerCode:e.target.value});
        
    }

    handleItem=(e)=>{
        this.setState({item:e.target.value});
        
    }

    handleItemFormat=(e)=>{
        this.setState({itemFormat:e.target.value});
        
    }


    handleRecipientName =(e)=>{
        this.setState({recipientName:e.target.value})
    }

    handleRecipientAddress =(e)=>{
        this.setState({recipientAddress:e.target.value})
    }

    handleRecipientPhone =(e)=>{
        this.setState({recipientPhone:e.target.value})
    }

    handleTotalCost=(e)=>{
        this.setState({totalCost:e.target.value});
        
    }

    handlePaymentFormat=(e)=>{
        this.setState({paymentFormat:e.target.value});
        
    }

    handleAgentCode = (e) =>{
        this.setState({agentCode:e.target.value})
    }

    handleAgentCommission = (e) =>{
        this.setState({agentCommission:e.target.value})
    }

    handleExpressFee=(e)=>{
        this.setState({expressFee:e.target.value});
        
    }

    handleDate=(date)=>{
        this.setState({date:date});
        
    }

    handleDuration=(e)=>{
        this.setState({duration:e.target.value});
        
    }

    handleStatus=(e)=>{
        this.setState({status:e.target.value});
        
    }

    handleSubmit = () =>{
        
        const order = {
            resellerCode:this.state.resellerCode,
            item:this.state.item,
            itemFormat : this.state.itemFormat,
            recipientName:this.state.recipientName,
            recipientAddress:this.state.recipientAddress,
            recipientPhone:this.state.recipientPhone,
            totalCost:this.state.totalCost,
            paymentFormat:this.state.paymentFormat,
            agentCode:this.state.agentCode,
            agentCommission:this.state.agentCommission,
            expressFee:this.state.expressFee,
            date:this.state.date,
            duration:this.state.duration,
            status:this.state.status
            
        }
        axios.post('http://localhost:5000/orders/add', order)
        .then(res => console.log(res.data))
        window.location = '/';
    }
    render(){
        const {resellerCode,item,itemFormat,recipientName,recipientAddress,recipientPhone,
        totalCost,paymentFormat,agentCode,agentCommission,expressFee,date,duration,status} = this.state;
        return (
            <div>
                <h3>Create new Order....</h3>
                <div>
                    
                    
                    <div className="form-group">
                        <div className="form-control">
                        <label style={{padding:"10px"}}>Reseller Code</label>
                        <input type="text" onChange={this.handleResellerCode} value={resellerCode}
                        />
                        <label style={{padding:"10px"}}>Item ..</label>
                        <input type="text" onChange={this.handleItem} value={item}
                          />
                        <label style={{padding:"10px"}}>item format</label>
                        <input type="text" onChange={this.handleItemFormat} value={itemFormat}
                          />
                        </div>
                        
                    </div>
                    
                    
                    <div className="form-group">
                        <div className="form-control">
                        <label style={{padding:"10px"}}>Recipient Name</label>
                        <input type="text" onChange={this.handleRecipientName} value={recipientName}
                         />
                        <label style={{padding:"10px"}}>Recipient Adress</label>
                        <input type="text" onChange={this.handleRecipientAddress} value={recipientAddress}
                         />
                        <label style={{padding:"10px"}}>Recipient Phone</label>
                        <input type="text" onChange={this.handleRecipientPhone} value={recipientPhone}
                        />
                        </div>
                        
                    </div>
                    
                    <div className="form-group">
                        
                    </div>
                    <div className="form-group">
                        <label>Total cost</label>
                        <input type="text" onChange={this.handleTotalCost} value={totalCost}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Payment Format</label>
                        <input type="text" onChange={this.handlePaymentFormat} value={paymentFormat}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Agent Code (appear in code only)</label>
                        <input type="text" onChange={this.handleAgentCode} value={agentCode}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Agent Commission(remove this!!)</label>
                        <input type="text" onChange={this.handleAgentCommission} value={agentCommission}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Express Fee</label>
                        <input type="text" onChange={this.handleExpressFee} value={expressFee}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Date of Order</label>
                        <div>
                            <DatePicker selected={date} onChange={this.handleDate}
                            dateFormat="dd/MM/yyyy" 
                            isClearable />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input type="text" onChange={this.handleDuration} value={duration}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Status (appear code only)</label>
                        <input type="text" onChange={this.handleStatus} value={status}
                        className="form-control" />
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


