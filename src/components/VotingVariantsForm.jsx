
const VotingVariantsForm = (props) => {

    const set = () => {

        props.setVariant(props.variant)

    }

    return ( 
        <div>
            <button onClick={set}>{props.variant}</button>
        </div>
     );
}
 
export default VotingVariantsForm;