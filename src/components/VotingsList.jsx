import VotingForm from './VotingForm';
import { useState, useContext, useEffect } from 'react';
import { TransactionContext } from './../context/TransactionContext';
import VotingVariantsList from './VotingVariantsList';


const VotingsList = (props) => {

    const {getVariants} = useContext(TransactionContext);
    const [currentTab, setCurrentTab] = useState()
    const [variants, setVariants] = useState([])
    
    let activeVotingsFiltered = props.activeVotings.filter(function (el) {
        return el != '';
    });

    useEffect(() => {
        props.getCurrentTab(currentTab)
        fetchVariants(props.ownerAddress, currentTab)}, [currentTab])

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
            {activeVotingsFiltered.map((voting) => 
            <VotingForm  voting={voting} key={voting} setActive={setActive}  />)}
            {variants.length>0 && ( <VotingVariantsList toVote={props.toVote} setVariant={props.setVariant} variants={variants} /> ) }
        </div>
     );
}
 
export default VotingsList;

