import { Routes, Route, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setList, addItem, updateItem } from './redux/action/data';
import { setAccount, setContract } from './redux/action/login';
import { useEffect } from 'react';
import { ROLE } from './helpers/roleType';
import { batchStatus } from './helpers/statusType';
import stateToProps from './helpers/stateToProps';

import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import Nav from './components/Nav';
import BatchPage from './components/BatchPage';
import * as Web3Service from './helpers/web3';

function App(props) {
    const navigate = useNavigate();

    async function firstSetup(){
        const accounts = await Web3Service.getAccounts();
        props.setAccount(accounts[0]);
        Web3Service.contract.events.e_createBatch()
        .on('data', event => {
            if(props.login.role === ROLE.MANAGER){
                props.addItem(event.returnValues.batch);
            }
        })
        .on('error', err => console.log(err));
        Web3Service.contract.events.e_updateBatch()
        .on('data', event => {
            props.updateItem(event.returnValues.batch, props.login.role);
        })
        .on('error', err => console.log(err));
        props.setContract(Web3Service.contract);
    }

    async function firstLoad(){
        if(!props.login.contract)
            return;

        let list = [];
        const batchList = await props.login.contract.methods.getBatchList().call();

        let status = -1;
        switch(props.login.role){
            case ROLE.MANAGER:
                list = batchList;
                break;
            case ROLE.INSPECTOR: 
                status = batchStatus.MAT_CHECK;
                break;
            case ROLE.PRODUCER: 
                status = batchStatus.PRODUCE;
                break;
            case ROLE.PACKER: 
                status = batchStatus.PACK;
                break;
            default:
                navigate('/login');
                return;
        }

        if(status !== -1){
            list = batchList.filter(batch => batch.status >= status);
        }

        props.setList(list);
    }

    useEffect(()=>{
        firstSetup();
    }, [props.login.role]);

    useEffect(()=>{
        firstLoad();
    }, [props.login.role]);

    return (
        <>
            <Nav/>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/login' element={<LoginPage/>}></Route>
                <Route path="/batch/:id" element={<BatchPage/>}></Route>
            </Routes>
        </>
    );
}

const mapDispatchToProps = {
    setList: setList,
    addItem: addItem,
    updateItem: updateItem,
    setAccount: setAccount,
    setContract: setContract
}

export default connect(stateToProps('login', 'data'), mapDispatchToProps)(App);
