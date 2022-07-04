import VotingForm from './VotingForm';


const VotingsList = ({activeVotings}) => {
    return ( 
        <div>
            <h2>Choose certain voting</h2>
            {activeVotings.map((voting) => 
            <VotingForm voting={voting} key={voting}  />)}
        
        </div>
     );
}
 
export default VotingsList;

