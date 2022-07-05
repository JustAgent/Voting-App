import VotingForm from './VotingForm';
import { useState, useContext, useEffect } from 'react';
import { TransactionContext } from './../context/TransactionContext';
import VotingVariantsList from './VotingVariantsList';


const VotingsList = ({activeVotings, ownerAddress}) => {

    const {getVariants} = useContext(TransactionContext);
    const [currentTab, setCurrentTab] = useState()
    const [variants, setVariants] = useState([])
    

    useEffect(() => {
        console.log('cur', currentTab);
        fetchVariants(ownerAddress, currentTab)}, [currentTab])

    const setActive =  (value) => {
        setCurrentTab(value)
    }

    const fetchVariants = async (ownerAddress, currentTab) => {        
        const temp =  await getVariants(ownerAddress,currentTab)
        setVariants(temp)
        console.log('TEMP', temp);
    }
     

    //<VotingVariantsList variants={variants} />
    return ( 
        
        <div>
            <h2>Choose certain voting</h2>
            {activeVotings.map((voting) => 
            <VotingForm  voting={voting} key={voting} setActive={setActive}  />)}
            {variants.length>0 && ( <VotingVariantsList variants={variants} /> ) }

        </div>
     );
}
 
export default VotingsList;

