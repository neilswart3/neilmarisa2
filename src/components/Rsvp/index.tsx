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

  validate = (name: string, value: string): string => {
    if (value === '') {
      return `${names[name]} can't be empty`;
    }

    if (regex.special.test(value)) {
      return errors[name];
    }

    if (name === 'email' || name === 'phone') {
      if (!regex[name].test(value)) {
        return errors[name];
      }
    }

    return '';
  };

  generateErrors = (): void => {
    const { firstName, lastName, email, phone, attend, relation } = this.state;

    this.setState({
      errors: {
        firstName: this.validate('firstName', firstName),
        lastName: this.validate('lastName', lastName),
        email: this.validate('email', email),
        phone: this.validate('phone', phone),
        attend: this.validate('attend', attend),
        relation: this.validate('relation', relation),
      },
    });
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();

    this.generateErrors();

    const recipientMail = 'rsvp@marisaneilwedding.co.za';
    const {
      errors,
      firstName,
      lastName,
      email,
      phone,
      attend,
      relation,
    } = this.state;

    console.clear();
    console.log('firstName:', firstName);
    console.log('errors:', errors);

    try {
      const res = await sendContactMail(
        recipientMail,
        `${firstName} ${lastName}`,
        email,
        phone,
        attend,
        relation,
      );
      if (res.status < 300) {
        this.setState({
          // message: 'Thanks for your message',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          attend: 'no',
          relation: '',
        });
      } else {
        // this.setState({ formButtonText: 'Please fill out all fields.' });
        console.log('error', res.status);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      attend,
      relation,
      errors,
    } = this.state;

    // console.log('firstName:', firstName);

    // console.log('errors:', errors);

    return (
      <ContentLayout title='RSVP'>
        <Styled.RsvpForm onSubmit={this.handleSubmit}>
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
              type='text'
              value={email}
              handleChange={this.handleChange}
            />
            <RsvpTextField
              name='phone'
              type='text'
              label='Phone'
              value={phone}
              handleChange={this.handleChange}
            />
          </Styled.RsvpFormWrap>
          <RsvpRelationship value={relation} handleChange={this.handleChange} />
          <RsvpAttending value={attend} handleChange={this.handleChange} />
          <Styled.Button type='submit' variant='contained' color='secondary'>
            Send
          </Styled.Button>
        </Styled.RsvpForm>
      </ContentLayout>
    );
  }
}

export default Rsvp;
