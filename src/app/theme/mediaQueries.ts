import { keys } from '@material-ui/core/styles/createBreakpoints';
import breakpoints from './breakpoints';

const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) => {
    return `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
  }
};

export default mediaQueries;
