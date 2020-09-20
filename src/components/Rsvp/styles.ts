import styled from 'styled-components';
import { 
  TextField as MuiTextField,
  Button as MuiButton,
} from '@material-ui/core';
import colors from 'src/app/theme/colors';

const TextField = styled(MuiTextField)`
  margin-top: 8px;

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

const Button = styled(MuiButton)`
  margin-top: 8px;
`;

const Styled = {
  TextField,
  Button,
};

export default Styled;
