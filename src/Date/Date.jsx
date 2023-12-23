import {useState} from "react";
import cs from './Date.module.css';

function Ddate({count, setCount, countMinus, countPlus}) {

    const cDate = new Date();
    let dday = cDate.setDate(cDate.getDate() + count);
    let dddday = new  Date(dday);
    let nDate = cDate.getFullYear() + '-' + (cDate.getMonth() + 1) + '-' + dddday.getDate();
    return (
        <div>
            <p></p>
            {(count === 0) ? "Today is " + nDate : (count > 0) ? count + " days from today is " + nDate : (count < 0) ? Math.abs(count) + " days ago was " + nDate : ''}

        </div>
    );
}


export default Ddate;