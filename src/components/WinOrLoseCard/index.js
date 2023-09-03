// Write your code here.
const WinOrLoseCard = props => {
  const {score, isWon, onclicking} = props

  const score1 = isWon ? 12 : score
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const onClickBtn = () => {
    onclicking()
  }
  return (
    <div>
      <h1>{isWon ? 'You Won' : 'You Lose'}</h1>
      <p>{isWon ? 'Best Score' : 'Score'}</p>
      <p>{score1}/12</p>
      <button type="button" onClick={onClickBtn}>
        Play Again
      </button>
      <img src={imgUrl} alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
