import React from 'react';

export interface EmailTestState {
  emailTest: string;
  errors: {
    emailTest: string;
  };
}

class EmailTest extends React.Component<{}, EmailTestState> {
  state = {
    emailTest: '',
    errors: {
      emailTest: '',
    },
  };

  handleChange = (e: any): void => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  validate = (value): string => {
    const testSpecial = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/.test(value);
    const testEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

    if (value === '') return 'Cannot be empty';
    if (testSpecial) return 'No special characters';
    if (!testEmail) return 'invalid email';

    return '';
  };

  handleSubmit = (e: any): void => {
    e.preventDefault();
    const { emailTest } = this.state;

    this.setState(prevState => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        emailTest: this.validate(emailTest),
      },
    }));
  };

  render() {
    const { emailTest, errors } = this.state;

    return (
      <form style={{ margin: '1rem 0' }} onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor='emailTest'>Email Here</label>
        </p>
        <p>
          <input
            onChange={this.handleChange}
            name='emailTest'
            id='email'
            type='text'
            value={emailTest}
          />
        </p>
        {errors.emailTest && <p>{errors.emailTest}</p>}
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default EmailTest;
