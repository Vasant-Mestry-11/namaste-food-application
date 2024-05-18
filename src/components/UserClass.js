import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';

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

    console.log('user class constructor')
  }


  async componentDidMount() {
    const res = await fetch('https://api.github.com/users/vasant-mestry-11');
    const data = await res.json()

    this.setState({
      userInfo: data
    })

    console.log('user class did mount')

  }

  componentWillUnmount() {
    console.log('unmount')
  }

  render() {
    const { name, location } = this.state.userInfo;

    console.log('user class render')



    return <div className="user-card">
      <h2>Name: {name}</h2>
      <UserContext.Consumer>
        {({ loggedInUser }) => <h3 className='font-bold'>{loggedInUser}</h3>}
      </UserContext.Consumer>
      <h3>Location: {location}</h3>
      <h4>Contact: @vasantmestry</h4>
    </div>
  }
}

export default UserClass