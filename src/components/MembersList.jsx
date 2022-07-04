import React from 'react';
import MemberForm from './MemberForm';

const MemberList = (props) => {


    return (
        <div>
        <h2>Add allowed members</h2>
        <div><button onClick={props.addMember}>Add allowed member</button></div>
        {props.members.map((member) => 
        <MemberForm onChange={props.onChange} votersList={props.votersList} member={member} key={member.id} deleteMember={props.deleteMember} />)}
        

            

        </div>
    )
}

export default MemberList;