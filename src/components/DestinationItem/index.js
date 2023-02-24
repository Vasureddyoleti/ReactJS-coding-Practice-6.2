// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="each-item">
      <div>
        <img className="image" src={imgUrl} alt={name} />
        <p className="description">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
