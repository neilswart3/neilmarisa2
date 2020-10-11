import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import Image from 'src/components/common/Image';
import Styled from './styles';
import LinkOurStory from '../Areas/LinkOurStory';

const Landing: React.FC = () => {
  return (
    <Styled.Landing>
      <Styled.HeaderWrap>
        <Typography gutterBottom variant='h1' color='primary'>
          Neil &amp; Marisa
        </Typography>
        <Typography
          gutterBottom
          variant='subtitle1'
          color='primary'
          style={{ fontWeight: 'bold' }}>
          Friday 27 Nov 2020
        </Typography>
        <Image src='neilmarisa.png' alt='Neil and Marisa' />
        <LinkOurStory />
      </Styled.HeaderWrap>
    </Styled.Landing>
  );
};

export default Landing;
