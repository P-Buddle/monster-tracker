import './header.css'
import { GiSharpedTeethSkull } from "react-icons/gi"
import Home from '../Home/Home'

const Header = () => {
  return (
    <div>
        <div className="container">
          <div className="header-icon">
              <GiSharpedTeethSkull />
          </div>
          <h1>MONSTER COMBAT TRACKER</h1>
       
          
        </div>
    </div>
  )
}

export default Header