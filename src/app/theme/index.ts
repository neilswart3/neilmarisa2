import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import typography from './typography';
import shape from './shape';

const theme = createMuiTheme({
  palette,
  typography,
  shape,
});

export default theme;
