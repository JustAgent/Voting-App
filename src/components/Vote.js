import React from 'react';
import cl from "./Vote.module.css"

const Vote = ({visible, setVisible}) => {
    
    const rootClasses = [cl.vote]
    if (!visible) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(' ')}>

            <h1>Write the voting owner</h1>
            <input placeholder='owner address'></input>
            <button>Search</button>
            <h2>Choose certain voting</h2>
            
        </div>
    )
}

export default Vote;