import React from 'react';

 const Agent = props =>(
    <tr>
        <td>{props.agent.agentCode}</td>
        <td>{props.agent.name}</td>
        <td>{props.agent.phone}</td>
        <td>{props.agent.status}</td>
    </tr>
)

export default Agent