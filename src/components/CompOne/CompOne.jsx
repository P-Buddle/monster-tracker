import { useState } from "react"
import Monster from "../Monster/Monster"
import Select from 'react-select'

const CompOne = (props) => {

    const [number, setNumber] = useState(1)
    const [monsterType, setMonsterType] = useState("")
    const [monsterHp, setMonsterHp] = useState(1)
    const [hitMod, setHitMod] = useState(0)

    const [dmgDice, setDmgDice] = useState(0)
    const [dmgMod, setDmgMod] = useState(0)
    

    const [committedFieldsToAdd, setCommittedFieldsToAdd] = useState(0)

    const handleChange = event => {
        setNumber(parseInt(event.target.value))
    }

    const changeMonsterType = event => {
        setMonsterType(event.target.value)
    }

    const changeMonsterHp = event => {
        setMonsterHp(parseInt(event.target.value))
    }

    const changeHitMod = event => {
        setHitMod(parseInt(event.target.value))
    }

    const changeDmgDice = event => {
        setDmgDice(event.target.value)
    }

    const changeDmgMod = event => {
        setDmgMod(event.target.value)
    }

  return (
    <div>
        
        <div className="monster-selector-container">
            <div className="column1">
            
                <label>Monster Type {props.monsterNumber}</label>
                <input 
                    type="text" onChange={changeMonsterType}
                />
                
                <br/>
                <label>How many?</label>
                <input 
                type="number" 
                min="1" 
                max="50" 
                onChange={handleChange}
                value={number}
                />
                <br/>
                <label>Monster Hit Points</label>
                <input type="number" required onChange={changeMonsterHp}/>
                
                <br/>
                <br/>
            </div>

            <div className="column2">
                <label>To Hit Mod</label>
                <input 
                    type="number"
                    onChange={changeHitMod}
                />
                
                <label>Damage Dice: D</label>
                <input 
                    type="number"
                    onChange={changeDmgDice}
                />

                <label>Damage Mod: +</label>
                <input 
                    type="number"
                    onChange={changeDmgMod}
                />
            </div>
        </div>
        <div className="monster-button-container">
            <button className="btn" onClick={() => {
                setCommittedFieldsToAdd(number)
            }}>
                Add Monsters 
            </button>
            
            <div className="results-container">
                {[...Array(committedFieldsToAdd)].map(
                    (elementInArray, index) => (
                    <div className="monster-container" key={index}>
                        <Monster number={`${index + 1}`} name={monsterType} hp={monsterHp} hitmod={hitMod} dmgDice={dmgDice} dmgMod={dmgMod}/>
                    </div>
                    )
                )}
            </div>
        </div>
        





        <div>
            
        </div>
    </div>
  )
}

export default CompOne