import React from 'react';
import { Form, Input, Badge } from 'reactstrap';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      email: '',
      subscription: false,
      card: '',
      cv: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  checkHadle = (e) => {
    this.setState({[e.target.name]: e.target.checked})
  }

  validateEmail = () => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValidEmail = re.test(this.state.email);
    const isVaildChecked = this.state.subscription;

    if (!isValidEmail) {
      alert('Your email is not vaild');
      return
    }
    if (!isVaildChecked) {
      alert('Your should accept all terms & conditions');
      return
    }

    this.setState({ email: '', subscription: false})
    alert('Thanks you for subscription')
  }

  render() {
    const { email, subscription, card, cv, firstName } = this.state
    return (
      <div>
        <div className='formApp'>
          <h1 className='mb-4 text-center text-white'>Form</h1>
          <label htmlFor="foo">Your email</label>
          <Input
            id='foo'
            name="email"
            placeholder="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor="">
            <Input
              type="checkbox"
              name="subscription"
              checked={subscription}
              onChange={this.checkHadle}
            />
            Men barcha shartlarga roziman
          </label>
          <br />
          <button className='btn btn-primary mt-3' onClick={this.validateEmail}>Primary</button>
        </div>
      </div>
    );
  }
}

export default Forms;
