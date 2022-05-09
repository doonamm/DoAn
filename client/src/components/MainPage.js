import '../style/MainPage.scss';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { ROLE } from '../helpers/roleType';
import ManagerPage from "./ManagerPage";
import stateToProps from "../helpers/stateToProps";
import DefaultPage from './DefaultPage';

function MainPage(props){
    const navigate = useNavigate();

    if(props.login.role === ROLE.NONE || props.login.account === ''){
        navigate('/login');
    }

    switch(props.login.role){
        case ROLE.MANAGER:
            return <ManagerPage/>;
        default:
            return <DefaultPage/>;
    }
}


export default connect(stateToProps('login', 'data'))(MainPage);