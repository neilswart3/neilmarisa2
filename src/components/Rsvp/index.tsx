import React from 'react';
import ContentLayout from 'src/layouts/ContentLayout';
import Styled from './styles';

class Rsvp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    attend: false,
    relation: 'Family of Bride',
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    const { firstName, lastName, email, phone } = this.state;

    return (
      <ContentLayout title='RSVP'>
        <form>
          <Styled.TextField
            fullWidth
            required
            margin='normal'
            id='firstName'
            name='firstName'
            label='First Name'
            value={firstName}
            onChange={this.handleChange}
          />
          <Styled.TextField
            fullWidth
            required
            margin='normal'
            id='lastName'
            name='lastName'
            label='Last Name'
            value={lastName}
            onChange={this.handleChange}
          />
          <Styled.TextField
            fullWidth
            required
            margin='normal'
            id='email'
            name='email'
            label='Email'
            type='email'
            value={email}
            onChange={this.handleChange}
          />
          <Styled.TextField
            fullWidth
            required
            margin='normal'
            id='phone'
            name='phone'
            type='tel'
            label='Phone'
            value={phone}
            onChange={this.handleChange}
          />
          <Styled.Button fullWidth variant='contained' color='secondary'>
            Send
          </Styled.Button>
        </form>
      </ContentLayout>
    );
  }
};

export default Rsvp;
