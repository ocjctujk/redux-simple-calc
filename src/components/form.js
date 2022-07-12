import './form.css'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { add_number, div_number, mul_number, sub_number, reset_number } from '../actions';
import { useState } from 'react';
function Form(){
    const [value,setValue] = useState(0);
    const dispatch = useDispatch();

    function changeHandler(e){
        setValue(e.target.value);
    }
    function resetHandler(){
        setValue(0);
        dispatch(reset_number());
    }

    return (
        <>
            <h3>Enter a number</h3>
            <input type="number" value={value} onChange={changeHandler}></input>   <br></br>
            <button onClick={()=>{dispatch(add_number(value))}}>+</button>
            <button onClick={()=>{dispatch(sub_number(value))}}>-</button>
            <button onClick={()=>{dispatch(mul_number(value))}}>*</button>
            <button onClick={()=>{dispatch(div_number(value))}}>/</button>
            <button className='resetButton' onClick={resetHandler}>Reset</button>
        </>
    )
}

export default Form;