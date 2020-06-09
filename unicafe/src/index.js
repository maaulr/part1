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

const Statistic = ({text, value}) => {
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const allClicks = good + neutral + bad
  const average = (good*1 + neutral*0 + bad*-1)/allClicks
  const positive = good/allClicks*100

  if (allClicks === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <Statistic text="good" value={good}/>
      <Statistic text="neutral" value={neutral}/>
      <Statistic text="bad" value={bad}/>
      <Statistic text="all" value={good + neutral + bad}/>
      <Statistic text="average" value={average}/>
      <Statistic text="positive" value={`${positive}%`}/>
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
