import {useState} from "react";
import cs from './Count.module.css';

function Count({count, setCount, countMinus, countPlus}) {
    return (
        <div>
            <button onClick={() => countMinus()}>-</button>
            Count: {count}
            <button onClick={() => countPlus()}>+</button>

        </div>
    );
}
export default Count;