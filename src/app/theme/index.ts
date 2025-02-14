import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import typography from './typography';
import shape from './shape';
import breakpoints from './breakpoints';
import overrides from './overrides';

const theme = createMuiTheme({
  breakpoints,
  palette,
  typography,
  shape,
});

export default theme;
