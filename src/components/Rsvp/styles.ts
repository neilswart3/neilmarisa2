import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import muiTheme from 'src/app/theme/muiTheme';

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
`;

const Styled = {
  Button,
  RsvpForm,
  RsvpFormWrap,
};

export default Styled;
