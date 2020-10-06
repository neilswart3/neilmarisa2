import React from 'react';
import Styled from './styles';

interface Props {
  name: string;
  label: string;
  value: string;
  type?: string;
  handleChange: (e: any) => void;
}

const RsvpTextField: React.FC<Props> = props => {
  const { name, label, value, type = 'text', handleChange } = props;

  return (
    <Styled.TextField
      fullWidth
      required
      error
      id={name}
      type={type}
      name={name}
      label={label}
      value={value}
      onChange={handleChange}
    />
  );
};

export default RsvpTextField;
