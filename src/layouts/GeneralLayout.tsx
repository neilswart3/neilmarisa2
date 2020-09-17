import React from 'react';
import Background from 'src/components/common/Background';
import Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<Props> = ({ children }) => {
  return (
    <Styled.GeneralLayout>
      <Background url='paris.jpg' />
      <Styled.ContentWrap>
        <Styled.LinkGreen />
        <Styled.Content>{children}</Styled.Content>
        <Styled.LinkRed />
      </Styled.ContentWrap>
    </Styled.GeneralLayout>
  );
};

export default GeneralLayout;
