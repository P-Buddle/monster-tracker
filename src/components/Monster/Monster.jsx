
import React, { useState } from "react"
import Dead from "./Dead"
import { GiSharpedTeethSkull } from "react-icons/gi"
import Diceroll from "../Dicerolls/Diceroll"


const Monster = (props) => {

    const [monsHp, setMonsHp] = useState(0)
    const [count, setCount] = useState(0)

    const handleChange = event => {
        setMonsHp(parseInt(event.target.value))
    }

    function subDmg() {
        setCount((currentNumber)=>currentNumber + monsHp)
        /* why is count not updating until next onClick? 
        only updates on the next render?!*/
        console.log(props.hp, count)
    }
   
  return (
 
    <div>
       
        <div className="icons">
            <GiSharpedTeethSkull />
        </div>
        <h3>{props.name} {props.number} </h3>
        <p>HP:{props.hp}</p>
        <p>Damage Taken: <p className="highlight">{count}</p></p>
        <div>
            {count >= parseInt(props.hp) ? <Dead /> :
                <> 
                    <div className="dmg-container">
                        <label className="inflict-label">Inflict</label>
                        <input type="number" min="0" value={monsHp} onChange={handleChange}/>
                        <button className="btn-small" onClick={subDmg}>Damage</button>
                    </div>
                    <div className="condition-box">
                        <textarea cols="30" rows="2" placeholder="conditions, stealth rolls etc"></textarea>
                    </div>
                    <Diceroll hitmod={props.hitmod} dmgDice={props.dmgDice} dmgMod={props.dmgMod}/>
                </> 
            }
        </div>
        
    </div>
          
  )
}

export default Monster