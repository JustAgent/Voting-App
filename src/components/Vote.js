import React, { useContext } from 'react';
import cl from "./Vote.module.css"
import { TransactionContext } from './../context/TransactionContext';
import { useState, useEffect } from 'react';
import VotingsList from './VotingsList';

const Vote = ({visible, setVisible}) => {
    
    const {getActive} = useContext(TransactionContext);
    const [ownerAddress, setOwnerAddress] = useState('')
    const [activeVotings, setActiveVotings] = useState([])

    const handlerAddressChange = (e) =>{
        const currentAddress = e.target.value;
        setOwnerAddress(currentAddress)
        //console.log(ownerAddress)
    }

    

    const SearchActive = async () => {
        const votingsList =  await getActive(ownerAddress)
        setActiveVotings(votingsList)
        console.log('Active', votingsList)  
    }

    const rootClasses = [cl.vote]
    if (!visible) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(' ')}>

            <h1>Write the voting owner</h1>
            <h2>0xA1F4ADFcA62E4f0D67e61547Ba73fF49183C9E6E</h2>
            <h2>0xA73BEC61Ba541C2B526F31755F8440c4ac45072D</h2>
            <input onChange={handlerAddressChange} placeholder='owner address'></input>
            <button onClick={SearchActive}>Search {activeVotings.length}</button>
           {activeVotings.length>0 && ( <VotingsList activeVotings={activeVotings}  /> ) }
        </div>
    )
}

export default Vote;