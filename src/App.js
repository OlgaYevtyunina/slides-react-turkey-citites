import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [portrait, setPortrait] = useState(0);
  const {id, name, description, image} = data[portrait];

  const previousPortrait = () =>{
    setPortrait((portrait =>{
      portrait --;
      if (portrait < 0){
      return data.length - 1;
      }
      return portrait;
    }))
  }

  const nextPortrait = () =>{
    setPortrait((portrait =>{
      portrait++;
      if (portrait > data.length - 1){
        portrait = 0;
      }
      return portrait;
    }))
  }

  return(
  <div>
  <div className="container">
  <h1>Best Cities to live in turkey</h1>
  </div>

  <div className="container">
  <h3>{id} - {name}</h3>
  </div>

  <div className="container">
  <button onClick={previousPortrait}>Prev</button>
  <img src={image} width="800" height="500vh" alt="turkey"/>
  <button onClick={nextPortrait}>Next</button>
  </div>

  <div className="container">
  <h2>{description}</h2>
  </div>
  </div>
  )
}

export default App;

