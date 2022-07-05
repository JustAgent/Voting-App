const VotingForm = ({voting, setActive}) => {

    const set = () => {
        setActive(voting)
    }
     

    return ( 
        <div>
            <button onClick={set}>{voting}</button>
        </div>
     );
}
 
export default VotingForm;