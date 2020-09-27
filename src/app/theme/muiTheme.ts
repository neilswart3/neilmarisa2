import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  spacing: factor => `${1.5 * factor}rem`,
});

export default muiTheme;