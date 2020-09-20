import React from 'react';
import { Typography } from '@material-ui/core';
import Styled from './styles';

interface Props {
  children: React.ReactNode;
  title: string;
}

const ContentLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <Styled.ContentLayout>
      <Styled.ContentLayoutWrap>
        <Typography align='center' gutterBottom variant='h2'>
          {title}
        </Typography>
        {children}
      </Styled.ContentLayoutWrap>
    </Styled.ContentLayout>
  );
}

export default ContentLayout;
