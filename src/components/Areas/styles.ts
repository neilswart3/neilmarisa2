import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import muiTheme from 'src/app/theme/muiTheme';

const Button = styled(MuiButton)`
  margin-top: ${muiTheme.spacing(1)};
`;

const Styled = { Button };

export default Styled;
