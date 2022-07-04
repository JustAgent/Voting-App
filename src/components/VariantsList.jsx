import VariantsForm from "./VariantsForm";

const VariantsList = (props) => {
    return ( 
        <>
        <h2>Add variants</h2>
        <div><button onClick={props.addVariant}>Add variant</button></div>
        {props.variants.map((variant) => 
        <VariantsForm  deleteVariant={props.deleteVariant} onChange={props.onChange}  variant={variant} key={variant.id} deleteMember={props.deleteMember} />)}
        </>
     );
}
 
export default VariantsList;