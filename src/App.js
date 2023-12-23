import logo from './logo.svg';
import Step from './Step/Step.jsx';
import Count from './Count/Count.jsx';
import Ddate from './Date/Date.jsx';
import './App.css';
import cs from './Step/Step.module.css'
import {useState} from "react";
function App() {
    const [step, setStep] = useState(1);
    function stepMinus() {
        if (step >= 2) setStep(step - 1);
    }
    function stepPlus() {
        if (step >= 1) setStep(step + 1);
    }
    const [count, setCount] = useState(0);
    function countMinus() {
        setCount(count - step);
    }
    function countPlus() {
        setCount(count + step);
    }
    // cDate.setHours(0,0,0,0);
    return (
        <div className="App">
            <div className={cs.mainGrid}>
                <div className="cursor">
                <Step step={step} setStep={setStep} stepMinus={stepMinus} stepPlus={stepPlus}/>
                <Count count={count} setCount={setCount} countMinus={countMinus} countPlus={countPlus}/>
                <Ddate count={count} setCount={setCount} countMinus={countMinus} countPlus={countPlus}/>
            </div>
        </div>
    <div className="App2">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
</div>
)
    ;
}

export default App;