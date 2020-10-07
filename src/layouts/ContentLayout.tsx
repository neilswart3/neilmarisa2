import React from 'react';
import { Typography } from '@material-ui/core';
import Styled from './styles';

interface Props {
  children: React.ReactNode;
  title: string;
  align?: 'top' | 'bottom' | 'center';
  fullwidth?: boolean;
}

const ContentLayout: React.FC<Props> = ({
  children,
  title,
  align = 'center',
  fullwidth = false,
}) => {
  return (
    <Styled.ContentLayout align={align} fullwidth={fullwidth}>
      <Styled.ContentLayoutWrap>
        <Typography align='center' gutterBottom variant='h2'>
          {title}
        </Typography>
        {children}
      </Styled.ContentLayoutWrap>
    </Styled.ContentLayout>
  );
};

export default ContentLayout;
