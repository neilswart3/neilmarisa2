import React from 'react';
import { InputLabel, FormHelperText } from '@material-ui/core';
import Styled from './styles';

const relationshipOptions = {
  familyBride: 'Family of the Bride',
  familyGroom: 'Family of the Groom',
  friendBride: 'Friend of the Bride',
  friendGroom: 'Friend of the Groom',
  plusOne: 'Plus One',
};

interface Props {
  handleChange: (e: any) => void;
  value: string;
  error: string;
}

const RsvpRelationship: React.FC<Props> = ({ handleChange, value, error }) => {
  return (
    <Styled.FormControl fullWidth error={error !== ''} /* required */>
      <InputLabel id='relationship-label'>Relationship</InputLabel>
      <Styled.Select
        labelId='relationship-label'
        id='relationship'
        defaultValue={value}
        onChange={handleChange}>
        {Object.entries(relationshipOptions).map(([key, value]) => (
          <Styled.MenuItem key={key} value={value}>
            {value}
          </Styled.MenuItem>
        ))}
      </Styled.Select>
      {error !== '' && <FormHelperText>{error}</FormHelperText>}
    </Styled.FormControl>
  );
};

export default RsvpRelationship;
