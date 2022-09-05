import { useState } from "react"
import dice from '../../images/d20.png'
import Dmgroll from "./Dmgroll";

const Diceroll = (props) => {
    const [num, setNum] = useState(0)

    function randomNumberInRange(min, max) {
       
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
      const toHit = () => {
        setNum(randomNumberInRange(1, 20));
      };

  return (

    <div className="diceroll">
      
        <button className="btn-attack-roll" onClick={toHit}>
            <img src={dice} />
        </button> 

        {num ? 
        <>
          <p>{num} + {props.hitmod}</p>
          { /*< Dmgroll dmgDice={props.dmgDice} dmgMod={props.dmgMod}/> */ }
        </> :
        <p>Roll to Hit</p>
        }

        


  

      
    </div>
  )
}

export default Diceroll