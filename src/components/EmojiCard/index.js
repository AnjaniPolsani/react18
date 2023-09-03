// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, onClicking} = props
  const {id, emojiUrl, emojiName} = details
  const onClickImage = () => {
    onClicking(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickImage}>
        <img className="img1" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
