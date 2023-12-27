import {useState} from "react";
import cs from './Count.module.css';
import * as events from "events";

function Count({count, setCount, countMinus, countPlus, step}) {
    return (
        <div>
            <button onClick={() => countMinus()}>-</button>
            <input type='text' value={count} onChange={(e)=> setCount(Number(e.target.value))} onKeyDown={(e) => e.key === 'Enter' ? setCount(Number(e.target.value)*step)  : ""}  />
            Count: {count}
            <button onClick={() => countPlus()}>+</button>

        </div>
    );
}
export default Count;