import React from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {

    return <div>

      <h1>About us</h1>

      <UserClass name="Vasant Mestry Class" location="Mumbai Class" />
    </div>

  }
}

export default About