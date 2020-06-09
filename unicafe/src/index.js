import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

const Feedback = () => {
  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button>good</button>
        <button>neutral</button>
        <button>bad</button>
      </div>
    </div>
  )
}

const Statistics = () => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good</p>
      <p>neutral</p>
      <p>bad</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback />
      <Statistics />
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
