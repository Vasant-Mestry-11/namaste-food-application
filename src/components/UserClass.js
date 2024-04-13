import React from 'react'

class UserClass extends React.Component {

  // whenever a class is instantiated/loaded, first its constructor get called


  /* lifecycle
    
    1. constructor
    2. render
    3. componentDidMount
  */

  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'dummy',
        location: 'dummy'
      }

    }
  }


  async componentDidMount() {
    const res = await fetch('https://api.github.com/users/akshaymarch7');
    const data = await res.json()

    this.setState({
      userInfo: data
    })
  }

  componentWillUnmount() {
    console.log('unmount')
  }

  render() {
    const { name, location } = this.state.userInfo;

    return <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @vasantmestry</h4>
    </div>
  }
}

export default UserClass