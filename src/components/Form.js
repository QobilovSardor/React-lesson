import React from 'react';

class Form extends React.Component {
  state = {
    firstName: '',
    email: '',
    message: '',
    select: '',
    subscribe: false,
    gender: ''
  }

  changeValue = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  changeCheck = (e) => {
    this.setState({ [e.target.name]: e.target.checked })
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
    const { firstName, email, message, select, subscribe, gender } = this.state
    return (
      <div className='posts'>
        <h1>Form</h1>
        <label htmlFor="">Your name </label>
        <input type="text"
          name='firstName'
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
        /> <br />
        <label htmlFor="">Meesage </label>
        <textarea name="message"
          placeholder='Message' 
          value={message} 
          onChange={this.changeValue}></textarea>
          <br />
        <select name="select" value={select} onChange={this.changeValue} id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <br />
          <label htmlFor="foo">
            Subscribe
          <input type="checkbox" id='foo' name="subscribe" value={subscribe} onChange={this.changeCheck} />
          </label> <br />
          <label htmlFor="">Gender</label>
          <input type="radio" name="gender" value='male' onChange={this.changeValue} /> Male
        <input type="radio" name="gender" value='female' onChange={this.changeValue} /> Female
      </div>
    );
  }
}

export default Form;
