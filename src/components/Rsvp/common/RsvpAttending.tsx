import React from 'react';
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@material-ui/core';
import Styled from './styles';

interface Props {
  value: string;
  handleChange: (e: any) => void;
  error: string;
}

const RsvpAttending: React.FC<Props> = ({ value, handleChange, error }) => {
  return (
    <Styled.FormControl margin='normal' error={error !== ''}>
      <FormLabel component='legend'>Attending</FormLabel>
      <RadioGroup
        aria-label='attending'
        name='attend'
        value={value}
        onChange={handleChange}>
        <FormControlLabel value='no' control={<Radio />} label='No' />
        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
      </RadioGroup>
      {error !== '' && <FormHelperText>{error}</FormHelperText>}
    </Styled.FormControl>
  );
};

export default RsvpAttending;
