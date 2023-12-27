import {useState} from "react";
import cs from './Step.module.css';

function Step({step, setStep, stepMinus, stepPlus}) {
    return (
        <div>
            <input type='range' min='0' max='10' value={step} onChange={(e) => setStep(Number(e.target.value))}/>
            <div>Step: {step}</div>


        </div>
    );
}


export default Step;