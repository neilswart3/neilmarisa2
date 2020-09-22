import styled from 'styled-components';
import {
  TextField as MuiTextField,
  FormControl as MuiFormControl,
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
} from '@material-ui/core';
import colors from 'src/app/theme/colors';

const TextField = styled(MuiTextField)`
  .MuiFormLabel-root {
    color: ${colors.white};
  }

  .MuiInputBase-root {
    &::before,
    &::after {
      border-color: ${colors.white};
    }
  }
`;

const Select = styled(MuiSelect)`
  &::before,
  &::after {
    border-color: ${colors.white};
  }

  .MuiSelect-icon,
  .MuiFormLabel-root {
    color: ${colors.white};
  }
`;

const MenuItem = styled(MuiMenuItem)`
  color: ${colors.black};
`;

const FormControl = styled(MuiFormControl)`
  width: 100%;

  .MuiFormLabel-root,
  .MuiRadio-root {
    color: ${colors.white};
  }

  .MuiFormGroup-root {
    flex-direction: row;
  }
`;

const Styled = {
  TextField,
  FormControl,
  Select,
  MenuItem,
};

export default Styled;
