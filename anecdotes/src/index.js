import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

const anecdotes_obj = {
  0:{'text':'If it hurts, do it more often', 'points':0},
  1:{'text': 'Adding manpower to a late software project makes it later!', 'points':0},
  2:{'text': 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', 'points':0},
  3:{'text': 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 'points':0},
  4:{'text': 'Premature optimization is the root of all evil.', 'points':0},
  5:{'text': 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 'points':0}
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState(props.anecdotes_obj)
  console.log(anecdotes)
  console.log(anecdotes[selected].text)

  return (
    <div>
      <h1>anecdotes</h1>
      <p>{anecdotes[selected].text}</p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes_obj={anecdotes_obj}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
