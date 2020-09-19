import React from 'react'
import { IconButton, Paper, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Styled from './styles';

interface Props {
  bgUrl: string;
  defaultBg: string;
  inputActive: boolean;
  toggleOpen: (active: boolean) => void;
  handleChange: (e: any) => void;
  handleReset: () => void;
}

const BackgroundForm: React.FC<Props> = props => {
  const {
    bgUrl,
    defaultBg,
    inputActive,
    toggleOpen,
    handleChange,
    handleReset,
  } = props;

  return (
    <Styled.EditBackground>
      <IconButton
        color='primary'
        aria-label='edit background'
        title='Edit Background'
        onClick={() => toggleOpen(inputActive)}>
        <EditIcon />
      </IconButton>
      {inputActive && (
        <>
          <TextField
            id='bgUrl'
            label='Unsplash ID'
            name='bgUrl'
            value={bgUrl}
            onChange={handleChange}
          />
          {bgUrl !== defaultBg && (
            <IconButton
              onClick={handleReset}
              color='secondary'
              aria-label='Reset'
              title='Reset'>
              <RotateLeftIcon />
            </IconButton>
          )}
        </>
      )}
    </Styled.EditBackground>
  );
};

export default BackgroundForm;
