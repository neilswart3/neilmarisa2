import React from 'react';
import { sendContactMail } from 'src/networking/sendContactMail';
import ContentLayout from 'src/layouts/ContentLayout';
import { RsvpTextField, RsvpAttending, RsvpRelationship } from './common';
import { errors, regex, names } from './errors';
import Styled from './styles';

interface State {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  attend: string;
  relation: string;
  errors: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    relation: string;
    attend: string;
  };
}

class Rsvp extends React.Component<{}, State> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    attend: 'no',
    relation: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      relation: '',
      attend: '',
    },
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  // validate = (name: string, value: string): void => {
  //   const text = !(name === 'email' || name === 'phone');

  //   // check for empty
  //   if (value === '') {
  //     this.setState(prevState => ({
  //       ...prevState,
  //       errors: {
  //         ...prevState.errors,
  //         [name]: `${names[name]} can't be empty`,
  //       },
  //     }));

  //     return;
  //   }

  //   this.setState(prevState => ({
  //     ...prevState,
  //     errors: {
  //       ...prevState.errors,
  //       [name]: text ? regex.text.test(value) ? '' : errors[name] : '',
  //     },
  //   }));

  //   if () {

  //   } else {
  // };

  // handleSend = () => {};

  handleSubmit = async (e: any) => {
    e.preventDefault();

    const recipientMail = 'yourmail@example.com';
    const { firstName, lastName, email, phone, attend, relation } = this.state;

    // try {
    //   const res = await sendContactMail(
    //     recipientMail,
    //     `${firstName} ${lastName}`,
    //     email,
    //     phone,
    //     attend,
    //     relation,
    //   );
    //   if (res.status < 300) {
    //     this.setState({
    //       message: 'Thanks for your message',
    //       firstName: '',
    //       lastName: '',
    //       email: '',
    //       phone: '',
    //       attend: 'no',
    //       relation: '',
    //     });
    //   } else {
    //     this.setState({ formButtonText: 'Please fill out all fields.' });
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
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
              type='text'
              handleChange={this.handleChange}
            />
            <RsvpTextField
              name='lastName'
              label='Last Name'
              type='text'
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
          <Styled.Button
            onSubmit={this.handleSubmit}
            variant='contained'
            color='secondary'>
            Send
          </Styled.Button>
        </Styled.RsvpForm>
      </ContentLayout>
    );
  }
}

export default Rsvp;
