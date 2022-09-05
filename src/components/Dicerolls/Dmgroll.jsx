import {GiBloodySword} from 'react-icons/gi'
import { useState } from 'react';

const Dmgroll = (props) => {


    const [dmg, setDmg] = useState(0)

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const toWound = () => {
        setDmg(randomNumberInRange(1, 3));
      };


  return (
    <div>

        <button className="btn-attack-roll" onClick={toWound}>
          <div className="sword"><GiBloodySword /></div>
        </button> 

        {dmg ? <p>{dmg}</p> :
        <p>Roll Dmg</p>
        }



    </div>
  )
}

export default Dmgroll