import { Component } from "react";

class ComponentLesson extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  // plusCount = () => {
  //   this.setState({count: this.state.count + 1})
  // }

  // minusCount = () => {
  //   this.setState({count: this.state.count - 1})
  // }

  // resetCount = () => {
  //   this.setState({count: this.state.count = 0})
  // }

  hendelClick = (val) => {
    this.setState({count: val})
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.hendelClick(this.state.count + 1)}>+</button>
        <button onClick={() => this.hendelClick(this.state.count - 1)}>-</button>
        <button onClick={() => this.hendelClick(0)}>reset</button>
      </div>
    )
  }
}
export default ComponentLesson