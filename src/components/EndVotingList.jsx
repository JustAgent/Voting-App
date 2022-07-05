import VotingForm from './VotingForm';
import { useState, useContext, useEffect } from 'react';
import { TransactionContext } from './../context/TransactionContext';
import VotingVariantsList from './VotingVariantsList';
import EndVotingForm from './EndVotingForm';


const EndVotingList = (props) => {

    let activeVotingsFiltered = props.activeVotings.filter(function (el) {
        return el != '';
    });

    return ( 
        
        <div>
            {activeVotingsFiltered.map((voting) => 
            <EndVotingForm  voting={voting} key={voting} setActive={props.setActive}  />)}
        </div>
     );
}
 
export default EndVotingList;

