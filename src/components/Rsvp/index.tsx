import React from 'react';
import ContentLayout from 'src/layouts/ContentLayout';
import { RsvpTextField, RsvpAttending, RsvpRelationship } from './common';
import Styled from './styles';

class Rsvp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    attend: 'no',
    relation: '',
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    const { firstName, lastName, email, phone, attend, relation } = this.state;

    return (
      <ContentLayout title='RSVP'>
        <Styled.RsvpForm>
          <Styled.RsvpFormWrap>
            <RsvpTextField
              name='firstName'
              label='First Name'
              value={firstName}
              handleChange={this.handleChange}
            />
            <RsvpTextField
              name='lastName'
              label='Last Name'
              value={lastName}
              handleChange={this.handleChange}
            />
            <RsvpTextField
              name='email'
              label='Email'
              type='email'
              value={email}
              handleChange={this.handleChange}
            />
            <RsvpTextField
              name='phone'
              type='tel'
              label='Phone'
              value={phone}
              handleChange={this.handleChange}
            />
          </Styled.RsvpFormWrap>
          <RsvpRelationship value={relation} handleChange={this.handleChange} />
          <RsvpAttending value={attend} handleChange={this.handleChange} />
          <Styled.Button fullWidth variant='contained' color='secondary'>
            Send
          </Styled.Button>
        </Styled.RsvpForm>
      </ContentLayout>
    );
  }
};

export default Rsvp;
