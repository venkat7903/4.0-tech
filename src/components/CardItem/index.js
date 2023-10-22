// Write your code here.
import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} tech-card`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-desc">{description}</p>
      <img src={imgUrl} className="card-img" alt={title} />
    </li>
  )
}

export default Card
