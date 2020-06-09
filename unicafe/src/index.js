import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

const Feedback = (props) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={props.handleGood}>good</button>
        <button onClick={props.handleNeutral}>neutral</button>
        <button onClick={props.handleBad}>bad</button>
      </div>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = goodVal => {
    setGood(goodVal)
  }

  const setNeutralValue = neutralVal => {
    setNeutral(neutralVal)
  }

  const setBadValue = badVal => {
    setBad(badVal)
  }

  return (
    <div>
      <Feedback handleGood={()=>setGoodValue(good+1)} handleNeutral={()=>setNeutralValue(neutral+1)} handleBad={()=>setBadValue(bad+1)}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
