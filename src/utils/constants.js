//import abi from './Vote.json'
import abi from 'contracts/Vote.json'

export const contractABI = abi.abi;
//export const contractAddress = '0xc78D96cA943b0A282E6dfaA5481c06B54e7cCca0' 
export const contractAddress = abi.networks[5].address 