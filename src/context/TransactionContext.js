import React, { useEffect, useState } from 'react';
import {ethers} from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();
 
const {ethereum} = window;

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    return transactionContract;

}




export const TransactionProvider = ( {children} ) => {

    const [currentAccount, setCurrentAccount] = useState('')

    const   checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert('Please install metamask');
    
            const accounts = await ethereum.request({ method: 'eth_accounts' })
    
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            }
            else {
                console.log('No accounts found')
            }
            console.log(accounts);
            console.log(children)
            
        } catch (error) {
            console.log(error)
            throw new Error('No eth object')
        }

    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please install metamask');
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error)
            throw new Error('No eth object')
        }
    }

    const createVoting = async (votingName, variants, allowedUsers) => {
        try {
            if (!ethereum) return alert('Please install metamask');
            const transactionContract =  createEthereumContract()
            
            const _createVoting = transactionContract._createVoting(votingName, variants, allowedUsers)

            

        } catch (error) {
            console.log(error)
            throw new Error('No eth object')
        }
    } 

    const getActive = async (ownerAddress) => {
        try {
            const transactionContract =  createEthereumContract()
            const _getActive = await transactionContract.getActive(ownerAddress)
            console.log('Result ',  _getActive  )
        return _getActive;
        } catch (error) {
            return false
        }
        
    }

    const _vote = async (ownerAddress, votingName, variant) => {
        try {
            const transactionContract =  createEthereumContract()
            const _vote = await transactionContract._vote(ownerAddress, votingName, variant)
            if (_vote) {
                return true
            }
        } catch (error) {
            console.log(error)
            return false
        }
        
    }

    const getVariants = async (ownerAddress, votingName) => {
        const transactionContract =  createEthereumContract()
        const _getVariants = await transactionContract.getVariants(ownerAddress, votingName)

        return _getVariants;
    }
     

    useEffect(() => {
    checkIfWalletIsConnected();
    }, []);

    return (
        <TransactionContext.Provider value={ {connectWallet, currentAccount, createVoting, getActive, getVariants, _vote} }>
            {children}
        </TransactionContext.Provider>
    )
}

    