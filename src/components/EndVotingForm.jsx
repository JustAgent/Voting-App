const EndVotingForm = ({voting, setActive}) => {

    const set = () => {
        setActive(voting)
    }
     

    return ( 
        <div>
            <button onClick={set}>{voting}</button>
        </div>
     );
}
 
export default EndVotingForm;