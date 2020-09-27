import breakpoints from './breakpoints';

type Key = keyof typeof breakpoints.values;

export const media = (value: number) => {
  return `@media (min-width: ${value}px)`;
};

// const mediaQueries = (key: Key) => {
//   return (style: TemplateStringsArray | String) => {
//     return `${media(breakpoints.values[key])} { ${style} }`;
//   };
// };

// const mediaQueries = (key: Key, style: string) => {
//   return `${media(breakpoints.values[key])} { ${style} }`;
// };

const mediaQueries = {
  sm: (style: string) => `${media(breakpoints.values['sm'])} { ${style} }`,
  md: (style: string) => `${media(breakpoints.values['md'])} { ${style} }`,
  lg: (style: string) => `${media(breakpoints.values['lg'])} { ${style} }`,
  xl: (style: string) => `${media(breakpoints.values['xl'])} { ${style} }`,
};

export default mediaQueries;
