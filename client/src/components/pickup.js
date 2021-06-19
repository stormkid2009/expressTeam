import React from 'react';

function Pickup(props) {
    return(
        <tr>
        <td>{props.pickup.date}</td>
        <td>{props.pickup.notes}</td>
        <td>{props.pickup.agentID}</td>
        <td>{props.pickup._id}</td>
        
    </tr>
    );
    
}

export default Pickup
