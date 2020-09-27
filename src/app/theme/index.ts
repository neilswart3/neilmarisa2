import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import typography from './typography';
import shape from './shape';
import breakpoints from './breakpoints';

const theme = createMuiTheme({
  breakpoints,
  palette,
  typography,
  shape,
});

export default theme;
