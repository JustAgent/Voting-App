import './App.css';
import { useState, useContext } from 'react';
import Vote from './components/Vote';
import Create from './components/Create';
import useInput from './hooks/useInput';
import ConnectPage from './components/ConnectPage';
import { TransactionContext } from './context/TransactionContext';

function App() {

  const {createVoting, getActive} = useContext(TransactionContext);

  const [members, setMembers] = useState([
  ])

  const [addresses, setAddresses] = useState([
  ])    

  const [variants, setVariants] = useState([  
  ])

  const [currentVariants, setCurrentVariants] = useState([  
  ])

  let votingName = useInput('')
  let approvedVariants = []
  let approvedMembers = []

  const [membersID, setMembersID] = useState(0)
  const [variantsID, setVariantsID] = useState(0)
  



  const addMember = (newMember) => {
  newMember.id = membersID
  setMembersID(membersID+1)
  setMembers([...members, newMember ])
}
  const addVariant = (newVariant) => {
    newVariant.id = variantsID
    setVariantsID(variantsID+1)
    setVariants([...variants, newVariant ])
    
  }
  const deleteMember = (member) => {
  setMembers(members.filter(m => m.id !== member))
  addresses[member] = ''
}

  const deleteVariant = (variant) => {
    setVariants(variants.filter(v => v.id !== variant))
    currentVariants[variant] = ''
  }

  const handleNameChange = (newMember) => {
    addresses[newMember.id] = newMember.address
}

  const handleCurrentVariantChange = (newVariant) => {
    currentVariants[newVariant.id] = newVariant.variant
}
  
   
  const submit = () => {

    approvedVariants = currentVariants.filter(function (el) {
      return el != '';
    });
    approvedMembers = addresses.filter(function (el) {
      return el != '';
    });

    console.log(votingName.value)
    console.log(approvedVariants)
    console.log(approvedMembers)
    createVoting(votingName.value, approvedVariants, approvedMembers)

    setAddresses([{}])
    setCurrentVariants([{}])
    setMembers([])
    setVariants([])
    votingName = ''

  }

  const [visible, setVisible] = useState(true)
  return (
    <div>
            <div>LOGO</div>
            <ConnectPage />
            <button onClick={() => setVisible(true)}>Create voting</button>
            <button onClick={() => setVisible(false)}>Vote</button>
            <Create  onChange={handleNameChange}  onVariantChange={handleCurrentVariantChange} votingName={votingName} deleteMember={deleteMember} deleteVariant={deleteVariant}
            addMember={addMember} addVariant={addVariant} members={members} variants={variants} visible={visible} submit={submit}/>

            <Vote visible={visible} setVisible={setVisible}/>
            
        </div>
  );
}

export default App;
