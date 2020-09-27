import React from 'react';
import { 
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import Styled from './styles';

interface Props {
  value: string;
  handleChange: (e: any) => void;
}

const RsvpAttending: React.FC<Props> = ({ value, handleChange }) => {
  return (
    <Styled.FormControl margin='normal'>
      <FormLabel component='legend'>Attending</FormLabel>
      <RadioGroup 
        aria-label='attending'
        name='attend'
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value='no' control={<Radio />} label='No' />
        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
      </RadioGroup>
    </Styled.FormControl>
  );
}

export default RsvpAttending;
