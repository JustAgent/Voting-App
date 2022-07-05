import VotingForm from './VotingForm';
import { useState, useContext } from 'react';
import { TransactionContext } from './../context/TransactionContext';
import VotingVariantsForm from './VotingVariantsForm';


const VotingVariantsList = ({variants}) => {

   
    console.log('VAR',variants)
    return ( 
        <div>
            <h2>Your choice</h2>
            {variants.map((variant) => 
            <VotingVariantsForm  variant={variant} key={variant}  />)}
            <button>Commit</button>
        </div>
     );
}
 
export default VotingVariantsList;

