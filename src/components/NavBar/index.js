// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isPlay} = props
  return (
    <nav className="nav-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <h1 className="head">EMOJI GAME</h1>
      {isPlay && (
        <div>
          <li>
            <p>Score:{score}</p>
          </li>
          <li>
            <p>TopScore:{topScore}</p>
          </li>
        </div>
      )}
    </nav>
  )
}
export default NavBar
