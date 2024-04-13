import React from 'react'
import './Home.css'

const Home = ({onGame}) =>{
   return (
      <div className = "home">
         <div className="headDiv">
            <h1>Typing Test</h1>
            <button className='btn' onClick={() => onGame('playGame')}>Start</button>
         </div>
      </div>
   )
}

export default Home