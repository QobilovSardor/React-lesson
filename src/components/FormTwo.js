import React from 'react';

class FormTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      card: '',
      cv: '',
      firstName: ''
    };
    this.cardRef = React.createRef();
    this.cvRef = React.createRef();
    this.nameRef = React.createRef();
  }

  hendlerChange = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => {
      if (this.state.card.length === 16) {
        this.cvRef.current.focus();
      }
      if (this.state.cv.length === 3) {
        this.nameRef.current.focus();
      }
    })
  }

  componentDidMount() {
    this.cardRef.current.focus();
  }

  render() {
    const { card, cv, firstName } = this.state
    return (
      <div className='formApp'>
        <div className='formApp-two'>
          <input 
            type='text'
            name='card'
            placeholder='VISA card number'
            value={card}
            onChange={this.hendlerChange}
            ref={this.cardRef}
            />
            <input
              type='text'
              name='cv'
              placeholder='CV'
              value={cv}
              onChange={this.hendlerChange}
              ref={this.cvRef}
            />
        </div>
            <input
              id='foo'
              type='text'
              name='firstName'
              placeholder='Your Name'
              value={firstName}
              onChange={this.hendlerChange}
              ref={this.nameRef}
            />
        <button className='btn btn-success'>SEND</button>
      </div>
    );
  }
}

export default FormTwo;
