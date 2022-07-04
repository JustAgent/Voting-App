import './App.css';
import { useState } from 'react';
import Vote from './components/Vote';
import Create from './components/Create';
import useInput from './hooks/useInput';
import ConnectPage from './components/ConnectPage';
function App() {

  const [members, setMembers] = useState([
    
])

const [addresses, setAddresses] = useState(
  {}
)    

  

  let votingName = useInput('')


  const addMember = (newMember) => {
  newMember.id = members.length
  setMembers([...members, newMember ])
}

  const deleteMember = (member) => {
  setMembers(members.filter(m => m.id !== member))
}

  const handleNameChange = (newMember) => {
    addresses[newMember.id] = newMember.address
}
  const submit = () => {
    console.log(votingName.value)
    console.log(addresses)
    setAddresses({})
    setMembers([])
    votingName = ''

  }

  const [visible, setVisible] = useState(true)
  return (
    <div>
            <div>LOGO</div>
            <ConnectPage />
            <button onClick={() => setVisible(true)}>Create voting</button>
            <button onClick={() => setVisible(false)}>Vote</button>
            
            <Create  onChange={handleNameChange} votingName={votingName} deleteMember={deleteMember} addMember={addMember} members={members} visible={visible} setVisible={setVisible} submit={submit}  />
            <Vote visible={visible} setVisible={setVisible}/>
            
        </div>
  );
}

export default App;
