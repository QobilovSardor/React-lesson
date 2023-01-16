import React from "react";

class LiveScyle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'Sardor Qobilov'
    }
  }

  getData() {
    setTimeout(() => {
      console.log('Our data updating');
      this.setState({data: 'John Deo'})
    }, 3000);
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1></h1>
      </div>
    )
  }
}
export default LiveScyle