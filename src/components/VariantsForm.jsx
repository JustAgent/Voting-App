const VariantsForm = ({variant, deleteVariant, onChange}) => {

    const handleNameChange = (e) => {
        const currentVariant = e.target.value
        const newVariant = {
            id: variant.id,
            variant: currentVariant,  
        }
        onChange(newVariant)
    }

    const del = () => {
        const toDel = variant.id
        deleteVariant(toDel)
    }

    return ( 

        <div>
        <input onChange={handleNameChange} placeholder={variant.id}></input>
        <button onClick={del}>Delete</button>        

        </div>

     );
}
 
export default VariantsForm;