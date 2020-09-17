import React from 'react';
import Image from 'src/components/common/Image';
import Styled from './styles';

const Landing: React.FC = () => {
  return (
    <Styled.Landing>
      <Styled.HeaderWrap>
        <h1>Neil&nbsp;Swart &amp; Marisa&nbsp;Janeke</h1>
        <Image src='neilmarisa.png' alt='Neil and Marisa' />
      </Styled.HeaderWrap>
    </Styled.Landing>
  );
}

export default Landing;
