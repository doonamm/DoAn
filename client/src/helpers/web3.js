import Web3 from 'web3';
import * as CONFIG from '../config';

const TESTING = true;

const provider = TESTING ? 'ws://localhost:8545' : Web3.givenProvider;
const web3 = new Web3(provider);

export const contract = new web3.eth.Contract(CONFIG.CONTRACT_ABI, CONFIG.CONTRACT_ADDRESS);

export const getAccounts = async () =>{
    return await web3.eth.getAccounts();
};