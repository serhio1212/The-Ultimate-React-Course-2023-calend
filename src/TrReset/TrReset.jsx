import {useState} from "react";
import cs from './TrReset.module.css';

function TrReset({count, setCount, step, setStep}) {
    function HandReset() {
        setCount(0);
        setStep(1);
    }

          return (  <div>
                <p></p>
                <button onClick={HandReset}>Reset</button>
            </div>)
}

export default TrReset;