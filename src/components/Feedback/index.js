// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {click: false}

  displayFeedback = () => {
    this.setState(prevState => ({click: !prevState.click}))
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="ul-container">
          {emojis.map(eachEmoji => (
            <li className="each-emoji" key={eachEmoji.id}>
              <img
                className="emoji"
                src={eachEmoji.imageUrl}
                alt={eachEmoji.name}
                onClick={this.displayFeedback}
              />
              <p className="name">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
        <h1 className="thank-you">Thank You</h1>
        <p className="feedback-des">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {click} = this.state
    return (
      <div className="app-container">
        {click ? this.renderThankyouScreen() : this.renderFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
