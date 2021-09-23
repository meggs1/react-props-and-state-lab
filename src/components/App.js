import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

let BASE_URL = "/api/pets"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type !== 'all') {
      fetch(BASE_URL + '?type=' + this.state.filters.type)
      .then(res => res.json())
      .then(petData => this.setState({
        pets: petData
      }))
    } else {
      fetch(BASE_URL)
        .then(res => res.json())
        .then(petData => this.setState({
          pets: petData
        }))
    }
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
