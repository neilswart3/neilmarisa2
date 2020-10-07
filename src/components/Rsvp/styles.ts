import styled from 'styled-components';
import { rgba } from 'polished';
import {
  Button as MuiButton,
  CircularProgress as MuiCircularProgress,
} from '@material-ui/core';
import muiTheme from 'src/app/theme/muiTheme';
import colors from 'src/app/theme/colors';

const RsvpForm = styled.form`
  display: grid;
  row-gap: ${muiTheme.spacing(0.35)};
  column-gap: ${muiTheme.spacing(0.75)};
`;

const RsvpFormWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: ${muiTheme.spacing(0.35)};
  column-gap: ${muiTheme.spacing(0.75)};
`;

const Button = styled(MuiButton)`
  margin: 8px auto 0;
  width: ${muiTheme.spacing(6)};

  &.Mui-disabled {
    background-color: ${rgba(colors.primary, 0.7)} !important;
  }
`;

const CircularProgress = styled(MuiCircularProgress)`
  color: ${colors.white};
`;

const Styled = {
  Button,
  RsvpForm,
  RsvpFormWrap,
  CircularProgress,
};

export default Styled;
