import React from 'react';
import cl from "./Create.module.css"
import MemberList from './MembersList';
const Create = (props) => {

    


    const rootClasses = [cl.create]
    if (props.visible) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(' ')}>

        <h1>Create voting</h1>
        <h2>Add voting name</h2>
        <input {...props.votingName} placeholder='voting name'></input>
        <h2>Add allowed members</h2>
        <MemberList   onChange={props.onChange}  deleteMember={props.deleteMember} members={props.members} />
        
        <div><button onClick={props.addMember}>Add allowed member</button></div>
        <div><button onClick={props.submit}>SUBMIT</button></div>
        </div>
    )
}

export default Create;