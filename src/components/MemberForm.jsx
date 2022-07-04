import React from 'react';

const MemberForm= ({member, deleteMember, onChange}) => {

    
    const handleNameChange = (e) => {
        const address = e.target.value
        const newMember = {
            id: member.id,
            address: address,  
        }
        onChange(newMember)
    }
    



    const del = () => {
        const toDel = member.id
        deleteMember(toDel)
    }

    return (
        <div>
        <input  onChange={handleNameChange} placeholder={member.id}></input>
        <button onClick={del}>Delete</button>        
        </div>
    )

}

export default MemberForm;