import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.pet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {(this.props.pet.gender == 'female') ? <p>♀</p> : <p>♂</p>}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        { (this.props.pet.isAdopted === true) 
            ? <button className="ui disabled button">Already adopted</button>
            : <button onClick={() => this.props.onAdoptPet(this.props.pet.id, this.props.pet)} className="ui primary button">Adopt pet</button>
          }     
        </div>
      </div>
    )
  }
}

export default Pet
