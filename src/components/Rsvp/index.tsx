import React from 'react';
import { Typography } from '@material-ui/core';
import publicSettings from 'src/app/publicSettings';
import { sendContactMail } from 'src/networking/sendContactMail';
import ContentLayout from 'src/layouts/ContentLayout';
import { RsvpTextField, RsvpAttending, RsvpRelationship } from './common';
import { errors, regex, names } from './errors';
import Styled from './styles';
import EmailTest from './EmailTest';

interface State {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  attend: string;
  relation: string;
  message: string;
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
    message: '',
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
      [name]: value,
    }));
  };

  validate = (name: string, value: string): string => {
    if (value === '') {
      return `${names[name]} can't be empty`;
    }

    if (regex.special.test(value)) {
      return 'No special characters allowed';
    }

    if (name === 'email' || name === 'phone') {
      if (!regex[name].test(value)) {
        return errors[name];
      }
    }

    return '';
  };

  handleSend = async (): Promise<void> => {
    const {
      errors,
      firstName,
      lastName,
      email,
      phone,
      attend,
      relation,
    } = this.state;
    const hasErrors = Object.values(errors).filter(val => val !== '');
    const recipientMail = publicSettings.mail.resMail;

    if (hasErrors.length === 0) {
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
            message: 'Thank you for your RSVP.',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            attend: 'no',
            relation: '',
          });
        } else {
          this.setState({
            message:
              'There was an error sending your message. Please try again.',
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();

    const {
      errors,
      firstName,
      lastName,
      email,
      phone,
      attend,
      relation,
    } = this.state;

    this.setState(
      {
        errors: {
          firstName: this.validate('firstName', firstName),
          lastName: this.validate('lastName', lastName),
          email: this.validate('email', email),
          phone: this.validate('phone', phone),
          attend: this.validate('attend', attend),
          relation: this.validate('relation', relation),
        },
      },
      () => {
        this.handleSend();
      },
    );
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      attend,
      relation,
      message,
      errors,
    } = this.state;

    return (
      <ContentLayout title='RSVP'>
        <Styled.RsvpForm onSubmit={this.handleSubmit}>
          <Styled.RsvpFormWrap>
            <RsvpTextField
              name='firstName'
              error={errors.firstName}
              label='First Name'
              value={firstName}
              type='text'
              handleChange={this.handleChange}
            />
            <RsvpTextField
              name='lastName'
              error={errors.lastName}
              label='Last Name'
              type='text'
              value={lastName}
              handleChange={this.handleChange}
            />
            <RsvpTextField
              name='email'
              error={errors.email}
              label='Email'
              type='email'
              value={email}
              handleChange={this.handleChange}
            />
            <RsvpTextField
              name='phone'
              error={errors.phone}
              type='tel'
              label='Phone'
              value={phone}
              handleChange={this.handleChange}
            />
          </Styled.RsvpFormWrap>
          <RsvpRelationship
            error={errors.relation}
            value={relation}
            handleChange={this.handleChange}
          />
          <RsvpAttending
            error={errors.attend}
            value={attend}
            handleChange={this.handleChange}
          />
          <Styled.Button type='submit' variant='contained' color='secondary'>
            Send
          </Styled.Button>
        </Styled.RsvpForm>
        {message !== '' ? (
          <Typography
            style={{ marginTop: '1rem' }}
            variant='body1'
            align='center'>
            {message}
          </Typography>
        ) : null}
      </ContentLayout>
    );
  }
}

export default Rsvp;
