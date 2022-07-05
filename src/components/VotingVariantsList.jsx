import VotingForm from './VotingForm';
import { useState, useContext } from 'react';
import { TransactionContext } from './../context/TransactionContext';
import VotingVariantsForm from './VotingVariantsForm';


const VotingVariantsList = ({variants, setVariant, toVote}) => {

   const commit = () => {
        toVote()
   }

    return ( 
        <div>
            <h2>Your choice</h2>
            {variants.map((variant) => 
            <VotingVariantsForm  setVariant={setVariant} variant={variant} key={variant}  />)}
            <button onClick={commit}>Commit</button>
        </div>
     );
}
 
export default VotingVariantsList;

