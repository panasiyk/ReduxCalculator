import React, {Component} from 'react'
import {connect} from "react-redux";
import {addNumber, dot, equals} from "../actions/firstAction";
import TopOfNumericBar from "./TopOfNumericBar";
import StandardOperations from "./StandardOperations";
import '../main.css';
import Popup from "./Popup";

class Number extends Component {
    arrayOfNumbers = [];

    componentWillMount (){
        for(let i=1; i<=9; i++){
            this.arrayOfNumbers.push({id:i,count:i});
        }
    }
    render(){
        return(
            <div className={'background'}>
                <Popup />
                <div className={'calculator'}>Calculator</div>
                <div className={'textBox'} >{this.props.inputText.join('')}</div>
                <div className={'secondFlax-container'}>
                    <div className={'flax-element'} onClick={ () => this.props.onclickNumber(0)}>0</div>
                    <div className={'flax-element'} onClick={this.props.onDot}>.</div>
                    <div className={'flax-element dark'} onClick={this.props.onEquals}>=</div>
                    {this.arrayOfNumbers.map((value) =>
                        <div className={'flax-element'} onClick={ () => this.props.onclickNumber(value.count)} key={value.id}>{value.count}</div>
                    )}
                    <TopOfNumericBar />
                </div>

                <div >
                    <StandardOperations />
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        inputText: state.inputText
    }
}

function  mapDispatchToProps (dispatch){
    return {
        onclickNumber : (number) => dispatch(addNumber(number)),
        onEquals : () => dispatch(equals()),
        onDot : () => dispatch(dot())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Number);