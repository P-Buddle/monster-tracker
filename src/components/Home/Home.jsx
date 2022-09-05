
import { useState } from "react"
import CompOne from "../CompOne/CompOne"

const Home = () => {

    const [number, setNumber] = useState(0)

    const handleChange = event => {
        setNumber(parseInt(event.target.value))
    }

  return (
    <div>
        <div className="form-selector">
            <label>Types of Monster</label>
            <input 
            type="number" 
            min="1" 
            max="50" 
            onChange={handleChange}
            value={number}
            />
        </div>

        <div>
                {[...Array(number)].map(
                    (elementInArray, index) => (
                    <div key={index}>
                        <CompOne monsterNumber={`${index + 1}`}/>
                    </div>
                    )
                )}
            </div>

    </div>
  )
}

export default Home