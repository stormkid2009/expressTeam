import React,{Component} from 'react';
import logistic from '../images/logistic.jpg'

export default class Home extends Component {
    
    render(){
        return (
            <div>
                <h5 style={{
                    color:"purple" , textAlign:"center"
                }}>Welcome to Express Team  dash Board</h5>
                <img src={logistic} alt="logistic" style={{
                     width:"100%"
                }}/>
                
            </div>
        )
    }
}


