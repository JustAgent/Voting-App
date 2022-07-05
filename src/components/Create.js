import React from 'react';
import cl from "./Create.module.css"
import MemberList from './MembersList';
import VariantsList from './VariantsList';
const Create = (props) => {

    


    const rootClasses = [cl.create]
    if (props.visible == 1) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(' ')}>

        <h1>Create voting</h1>
        <h2>Add voting name</h2>
        <input {...props.votingName} placeholder='voting name'></input>
        <VariantsList onChange={props.onVariantChange} addVariant={props.addVariant} variants={props.variants} deleteVariant={props.deleteVariant} />
        <MemberList   addMember={props.addMember} onChange={props.onChange}  deleteMember={props.deleteMember} members={props.members} />
        
        <div><button onClick={props.submit}>SUBMIT</button></div>
        </div>
    )
}

export default Create;