import React from 'react'
import {addOperation, removeAll} from "../actions/firstAction";
import {connect} from "react-redux";

const StandardOperations = ({onOperation,onClickRemoveAll}) =>(
    <div className={'thirdFlax-container'}>
        <div className={'flax-element dark'} onClick={onClickRemoveAll}>CE</div>
        <div className={'flax-element'} onClick={() => onOperation('+')}>+</div>
        <div className={'flax-element'} onClick={() => onOperation('-')}>-</div>
        <div className={'flax-element'} onClick={() => onOperation('*')}>*</div>
        <div className={'flax-element'} onClick={() => onOperation('/')}>/</div>
    </div>
);

function mapDispatchToProps(dispatch) {
    return{
        onOperation : (operation) => dispatch(addOperation(operation)),
        onClickRemoveAll: () => dispatch(removeAll())
    }
}
export default connect(null,mapDispatchToProps)(StandardOperations);