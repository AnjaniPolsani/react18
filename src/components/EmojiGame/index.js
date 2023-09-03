/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import NavBar from '../NavBar'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    topScore: 0,
    isPlay: true,
    isWon: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getScoreCard = listLength => {
    const {topScore} = this.state

    let newScore = topScore
    if (listLength > topScore) {
      newScore = listLength
    }
    this.setState({topScore: newScore})
  }

  onReset = () => {
    this.setState({isPlay: true, clickedEmojisList: []})
  }

  onClickImage = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    if (clickedEmojisList.includes(id)) {
      this.setState({isPlay: false, isWon: false})
      this.getScoreCard(clickedEmojisList.length)
    } else if (clickedEmojisList.length === emojisList.length - 1) {
      this.setState({
        isPlay: false,
        isWon: true,
      })
      this.getScoreCard(emojisList.length)
    } else {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  render() {
    const {clickedEmojisList, topScore, isPlay, isWon} = this.state
    console.log(clickedEmojisList.length)
    const shuffledList = this.shuffledEmojisList()
    return (
      <div>
        <NavBar
          score={clickedEmojisList.length}
          topScore={topScore}
          isPlay={isPlay}
        />
        {isPlay ? (
          <ul className="cont1">
            {shuffledList.map(each => (
              <EmojiCard
                onClicking={this.onClickImage}
                details={each}
                key={each.id}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            isWon={isWon}
            score={clickedEmojisList.length}
            onclicking={this.onReset}
          />
        )}
      </div>
    )
  }
}
export default EmojiGame
