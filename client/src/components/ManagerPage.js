import { connect } from "react-redux";
import stateToProps from '../helpers/stateToProps';
import { numToBatchStatus } from "../helpers/statusType";
import BatchListTable from "./BatchListTable";
import useSetGet from '../helpers/useSetGet';
import { useEffect } from "react";

function ManagerPage(props){
    const selectedTabIndex = useSetGet(0);
    const tabs = useSetGet({});    

    useEffect(()=>{
        const tabsData = {};
        tabsData[0] = props.data.list;

        props.data.list.forEach(item => {
            const index = parseInt(item.status) + 1;
            tabsData[index] = tabsData[index] || [];
            tabsData[index].push(item);
        });

        tabs.set(tabsData);
    }, [props.data.list]);

    return(
        <div className="page fix-table">
            <ul className="row tab">
                <li className={selectedTabIndex.val === 0 ? 'selected' : ''} onClick={()=>selectedTabIndex.set(0)}>All</li>
                {
                    numToBatchStatus.map((status, index) => (
                        <li key={index} className={selectedTabIndex.val === index + 1 ? 'selected' : ''}  onClick={()=>selectedTabIndex.set(index + 1)}>{status}</li>
                    ))
                }
            </ul>
            <BatchListTable list={tabs.val[selectedTabIndex.val]}/>
        </div>
    );
}

export default connect(stateToProps('login', 'data'))(ManagerPage);