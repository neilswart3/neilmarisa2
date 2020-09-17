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

  h1 {
    font-family: 'Savoye LET', sans-serif;
    color: rgb(161, 93, 95);
    font-size: 4rem;
    margin: 0 0 0.5rem 0;
  }

  img {
    max-width: 70%;
  }
`;

const Styled = {
  Landing,
  HeaderWrap,
};

export default Styled;
