import styled from 'styled-components';
import { 
  Button as MuiButton,
} from '@material-ui/core';

const RsvpForm = styled.form`
  display: grid;
  grid-gap: 2rem;
`;

const RsvpFormWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const Button = styled(MuiButton)`
  margin-top: 8px;
`;

const Styled = {
  Button,
  RsvpForm,
  RsvpFormWrap,
};

export default Styled;
