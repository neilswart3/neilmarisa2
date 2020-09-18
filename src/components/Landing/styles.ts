import styled from 'styled-components';

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
`;

const Styled = {
  Landing,
  HeaderWrap,
};

export default Styled;
