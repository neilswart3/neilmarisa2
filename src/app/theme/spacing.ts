import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  spacing: factor => `${1.5 * factor}rem`,
});

export default theme;