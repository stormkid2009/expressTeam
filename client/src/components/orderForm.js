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
            recipientName:'',
            recipientAddress:'',
            recipientPhone:'',
            totalCost:0,
            agentCode:'default',
            agentCommission:0,
            expressFee:0,
            date: new Date(),
            status:'pending',
            notes:''
            
        }
        this.handleResellerCode = this.handleResellerCode.bind(this);
        this.handleItem = this.handleItem.bind(this);
        this.handleRecipientName = this.handleRecipientName.bind(this);
        this.handleRecipientAddress = this.handleRecipientAddress.bind(this);
        this.handleRecipientPhone = this.handleRecipientPhone.bind(this);
        this.handleTotalCost = this.handleTotalCost.bind(this);
        this.handleAgentCommission = this.handleAgentCommission.bind(this);
        this.handleExpressFee = this.handleExpressFee.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleNotes = this.handleNotes.bind(this);
        
    }
    

    handleResellerCode=(e)=>{
        this.setState({resellerCode:e.target.value});
        
    }

    handleItem=(e)=>{
        this.setState({item:e.target.value});
        
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


    handleAgentCommission = (e) =>{
        this.setState({agentCommission:e.target.value})
    }

    handleExpressFee=(e)=>{
        this.setState({expressFee:e.target.value});
        
    }

    handleDate=(date)=>{
        this.setState({date:date});
        
    }

    handleNotes=(e)=>{
        this.setState({notes:e.target.value});
        
    }

    

    handleSubmit = () =>{
        
        const order = {
            resellerCode:this.state.resellerCode,
            item:this.state.item,
            recipientName:this.state.recipientName,
            recipientAddress:this.state.recipientAddress,
            recipientPhone:this.state.recipientPhone,
            totalCost:this.state.totalCost,
            agentCode:this.state.agentCode,
            agentCommission:this.state.agentCommission,
            expressFee:this.state.expressFee,
            date:this.state.date,
            status:this.state.status,
            notes:this.state.notes
            
        }
        axios.post('http://localhost:5000/orders/add', order)
        .then(res => console.log(res.data))
        window.location = '/';
    }
    render(){
        const {resellerCode,item,recipientName,recipientAddress,recipientPhone,
        totalCost,notes,agentCommission,expressFee,date} = this.state;
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
                        <input type="text" onChange={this.handleItem} value={item}/>
                        </div>   
                    </div>
                    
                    
                    <div className="form-group">
                        <div className="form-control">
                            <label style={{padding:"10px"}}>Recipient Name</label>
                            <input type="text" onChange={this.handleRecipientName} value={recipientName}/>
                            <label style={{padding:"10px"}}>Recipient Adress</label>
                            <input type="text" onChange={this.handleRecipientAddress} value={recipientAddress}/>
                            <label style={{padding:"10px"}}>Recipient Phone</label>
                            <input type="text" onChange={this.handleRecipientPhone} value={recipientPhone}/>
                        </div>
                        
                    </div>
                    
                    <div className="form-group">
                        <div className="form-control">
                            <label style={{padding:"10px"}}>Total cost</label>
                            <input type="text" onChange={this.handleTotalCost} value={totalCost}/>
                            <label style={{padding:"10px"}}>Agent Commission</label>
                            <input type="text" onChange={this.handleAgentCommission} value={agentCommission} />
                            <label style={{padding:"10px"}}>Express Fee</label>
                            <input type="text" onChange={this.handleExpressFee} value={expressFee}/>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <div className="form-control">
                            <label style={{padding:"10px"}}>Date of Order</label>
                            
                                <DatePicker selected={date} onChange={this.handleDate}
                                dateFormat="dd/MM/yyyy" 
                                isClearable />
                            
                            <label style={{padding:"10px"}}>Notes...</label>
                            <input type="text" onChange={this.handleNotes} value={notes}/>
                        </div>
                        
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


