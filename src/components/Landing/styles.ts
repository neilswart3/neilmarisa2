import styled from 'styled-components';
import mediaQueries from 'src/app/theme/mediaQueries';

const Landing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    max-width: 70%;
    max-height: 50vh;
  }

  h1 {
    font-weight: 400;

    ${mediaQueries('desktop')`
      font-weight: 700;
    `};
  }
`;

const Styled = {
  Landing,
  HeaderWrap,
};

export default Styled;
