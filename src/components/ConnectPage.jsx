import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const ConnectPage = () => {
    const {connectWallet, currentAccount} = useContext(TransactionContext);

    return (
    <>
        <h1>Conenct Your MetaMask</h1>
        {!currentAccount && (<button onClick={connectWallet}>Connect MetaMask</button>)}
        
    </>
    )

    
}

export default ConnectPage;