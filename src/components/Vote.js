import React, { useContext } from 'react';
import cl from "./Vote.module.css"
import { TransactionContext } from './../context/TransactionContext';
import { useState, useEffect } from 'react';
import VotingsList from './VotingsList';

const Vote = ({visible, setVisible}) => {
    
    const {getActive, _vote} = useContext(TransactionContext);
    const [ownerAddress, setOwnerAddress] = useState('')
    const [activeVotings, setActiveVotings] = useState([])
    const [currentTab, setCurrentTab] = useState()
    const [currentVariant, setCurrentVariant] = useState('')

    useEffect(() => {
        
        SearchActive()

    }, [ownerAddress]);

    const toVote = async () =>  {
       const result = await _vote(ownerAddress, currentTab, currentVariant)
       console.log(result);
    }
    const getCurrentTab = (e) => {
        setCurrentTab(e)
    }

    const handlerAddressChange = (e) =>{
        const currentAddress = e.target.value;
        setOwnerAddress(currentAddress)
    }

    const SearchActive = async () => {
        const votingsList =  await getActive(ownerAddress)
        setActiveVotings(votingsList)
        console.log('Active', votingsList)  
    }

    const setVariant = (e) => {
        setCurrentVariant(e)
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
           {activeVotings.length>0 && ( <VotingsList getCurrentTab={getCurrentTab} toVote={toVote} setVariant={setVariant}  ownerAddress={ownerAddress} activeVotings={activeVotings}  /> ) }
        </div>
    )
}

export default Vote;