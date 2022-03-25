import React from 'react';
import {Styled} from "./Calculator.styled";
import {useDispatch, useSelector} from "react-redux";
import {buttonNumber,buttonTotal, clearNumber, buttonSign} from "../store/actions";
import {reducerCalculator} from "../store/reducer";


const Calculator = () => {

const dispatch=useDispatch()
const state=useSelector((state)=> state)
const {lineOne, lineTwo}=state.reducerCalculator



// const arr=[]

const funcButton=(payload)=>{
    if(payload==='='){
        dispatch(buttonTotal(payload))
    }
    else if(payload==='AC'){
        dispatch(clearNumber(payload))
    }
    else {
        dispatch(buttonNumber(payload))
    }

}

    return (
        <div>
            <Styled.Total>
            <h1>{lineTwo}</h1>
            <h1>{lineOne}</h1>
            </Styled.Total>
            <Styled.Root>

    <Styled.But value={0} onClick={(e)=>funcButton(e.target.value)}>0</Styled.But>
    <Styled.But value={1} onClick={(e)=>funcButton(e.target.value)}>1</Styled.But>
    <Styled.But value={2} onClick={(e)=>funcButton(e.target.value)}>2</Styled.But>
    <Styled.But value={3} onClick={(e)=>funcButton(e.target.value)}>3</Styled.But>
    <Styled.But value={4} onClick={(e)=>funcButton(e.target.value)}>4</Styled.But>
    <Styled.But value={5} onClick={(e)=>funcButton(e.target.value)}>5</Styled.But>
    <Styled.But value={6} onClick={(e)=>funcButton(e.target.value)}>6</Styled.But>
    <Styled.But value={7} onClick={(e)=>funcButton(e.target.value)}>7</Styled.But>
    <Styled.But value={8} onClick={(e)=>funcButton(e.target.value)}>8</Styled.But>
    <Styled.But value={9} onClick={(e)=>funcButton(e.target.value)}>9</Styled.But>
    <Styled.But value={'+'} onClick={(e)=>funcButton(e.target.value)}>+</Styled.But>
    <Styled.But value={'-'} onClick={(e)=>funcButton(e.target.value)}>-</Styled.But>
    <Styled.But value={'/'} onClick={(e)=>funcButton(e.target.value)}>/</Styled.But>
    <Styled.But value={'*'} onClick={(e)=>funcButton(e.target.value)}>x</Styled.But>
    <Styled.But value={'='} onClick={(e)=>funcButton(e.target.value)}>=</Styled.But>
    <Styled.But value={'.'} onClick={(e)=>funcButton(e.target.value)}>.</Styled.But>
    <Styled.But value={'AC'} onClick={(e)=>funcButton(e.target.value)}>AC</Styled.But>

            </Styled.Root>
        </div>
    );
};

export default Calculator;