import {useState} from "react";
import cs from './Step.module.css';
function Step({step, setStep, stepMinus, stepPlus}) {
    return (
        <div>
            <button onClick={() => stepMinus()}>-</button>
            Step: {step}
            <button onClick={() => stepPlus()}>+</button>
        </div>
    );
}


export default Step;