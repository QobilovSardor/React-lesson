import React from 'react';

class Form extends React.Component {
  state = {
    firstName: '',
    email: ''
  }

  changeValue = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  validateName = () => {
    if (this.state.firstName.length < 5) {
      alert("Sizning ismingiz 5harifdan oshgan bo'lishi ketak")
    }
  }
  validateEmail = () => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!re.test(this.state.email)) {
      alert("Emailni notog'ri kiritingiz iltomos tekshirib qaytadan urinib ko'ring")
    }
  }

  render() {
    const {firstName, email} = this.state
    return (
      <div className='posts'>
        <h1>Form</h1>
        <label htmlFor="">Your name </label>
        <input type="text" 
          name= 'firstName'
          value={firstName}
          onChange={this.changeValue}
          onBlur={this.validateName}
        />
        <br />
        <label htmlFor="">Your email </label>
        <input type="email"
          name='email'
          value={email}
          onChange={this.changeValue}
          onBlur={this.validateEmail}
        />
      </div>
    );
  }
}

export default Form;
