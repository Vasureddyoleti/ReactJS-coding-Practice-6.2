// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="searchBar-container">
          <input
            placeholder="Search"
            className="searchBar"
            type="search"
            onChange={this.onChangeSearchInput}
          />
          <img
            className="searchLogo"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
          />
        </div>
        <ul className="searchItem-container">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} destinationDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
