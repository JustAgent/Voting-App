import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from './../context/TransactionContext';
import VotingsList from './VotingsList';
import cl from "./EndVoting.module.css"
import EndVotingList from './EndVotingList';




const EndVoting = ({visible}) => {
    const [activeVotings, setActiveVotings] = useState([])
    const {currentAccount, endVoting, getActive} = useContext(TransactionContext);
    const [currentTab, setCurrentTab] = useState()

    const finishVoting = async () => {
        const result = await endVoting(currentTab)
        console.log(result); // voting results
        alert({result})
    }

    useEffect(() => { SearchActive() }, [currentAccount]);

    const SearchActive = async () => {
        const votingsList =  await getActive(currentAccount)
        setActiveVotings(votingsList)
    }

    const setActive =  (value) => {
        setCurrentTab(value)
    }

    const rootClasses = [cl.vote]
    if (visible == 3) {
        rootClasses.push(cl.active)
    }

    return ( 
        <div className={rootClasses.join(' ')}>
            <h1>Choose the voting</h1>
            {activeVotings.length>0 && ( <EndVotingList activeVotings={activeVotings} setActive={setActive} /> ) }
            {currentTab 
            ? <button onClick={finishVoting}>Confirm</button>
            : <></>}

        </div>
     );
}
 
export default EndVoting;