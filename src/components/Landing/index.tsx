import React from 'react';
import { Typography } from '@material-ui/core';
import Image from 'src/components/common/Image';
import Styled from './styles';

const Landing: React.FC = () => {
  return (
    <Styled.Landing>
      <Styled.HeaderWrap>
        <Typography variant='h1' color='primary'>
          Neil &amp; Marisa
        </Typography>
        <Typography variant='subtitle1' color='primary'>
          Friday 27 Nov 2020
        </Typography>
        <Image src='neilmarisa.png' alt='Neil and Marisa' />
      </Styled.HeaderWrap>
    </Styled.Landing>
  );
}

export default Landing;
