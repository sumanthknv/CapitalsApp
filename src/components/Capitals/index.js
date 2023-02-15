import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeCapitalText: countryAndCapitalsList[0].id,
  }

  getFilteredCountry = () => {
    const {activeCapitalText} = this.state
    const filteredCountry = countryAndCapitalsList.filter(
      each => each.id === activeCapitalText,
    )
    console.log(filteredCountry)
    return filteredCountry
  }

  render() {
    const filteredCountry = this.getFilteredCountry()

    return (
      <div className="app-bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>

          <select className="capitals-text" id="capitals">
            {countryAndCapitalsList.map(eachCapital => (
              <option value="newdelhi">{eachCapital.capitalDisplayText}</option>
            ))}
          </select>
          <label className="label" htmlFor="capitals">
            Is Capital of which Country ?
          </label>
          {filteredCountry.map(eachCountry => (
            <h1 className="country">{eachCountry.country}</h1>
          ))}
        </div>
      </div>
    )
  }
}

export default Capitals
