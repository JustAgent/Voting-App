import VotingForm from './VotingForm';
import { useState, useContext, useEffect } from 'react';
import { TransactionContext } from './../context/TransactionContext';
import VotingVariantsList from './VotingVariantsList';


const VotingsList = ({activeVotings, ownerAddress, setVariant, toVote, getCurrentTab}) => {

    const {getVariants} = useContext(TransactionContext);
    const [currentTab, setCurrentTab] = useState()
    const [variants, setVariants] = useState([])
    

    useEffect(() => {
        getCurrentTab(currentTab)
        fetchVariants(ownerAddress, currentTab)}, [currentTab])

    const setActive =  (value) => {
        setCurrentTab(value)
    }

    const fetchVariants = async (ownerAddress, currentTab) => {       
        const temp =  await getVariants(ownerAddress,currentTab)
        setVariants(temp)
    }
     

    return ( 
        
        <div>
            <h2>Choose certain voting</h2>
            {activeVotings.map((voting) => 
            <VotingForm  voting={voting} key={voting} setActive={setActive}  />)}
            {variants.length>0 && ( <VotingVariantsList toVote={toVote} setVariant={setVariant} variants={variants} /> ) }
        </div>
     );
}
 
export default VotingsList;

