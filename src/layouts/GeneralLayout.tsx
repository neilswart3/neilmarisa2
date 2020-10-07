import React from 'react';
import Background from 'src/components/common/Background';
import Plane from 'src/components/Plane';
import Styled from './styles';

interface Props {
  children: React.ReactNode;
  overlay: 'primary' | 'secondary' | false;
  areaBottomRight: React.ReactNode;
  areaTopLeft: React.ReactNode;
}

const GeneralLayout: React.FC<Props> = props => {
  const { children, areaTopLeft, areaBottomRight, overlay = false } = props;

  return (
    <Styled.GeneralLayout>
      <Background overlay={overlay} url='paris-min.jpg' />
      <Plane pos='top' />
      <Plane pos='bottom' />
      <Styled.ContentWrap>
        <Styled.TopLeftWrap>{areaTopLeft}</Styled.TopLeftWrap>
        <Styled.Content>{children}</Styled.Content>
        <Styled.BottomRightWrap>{areaBottomRight}</Styled.BottomRightWrap>
      </Styled.ContentWrap>
    </Styled.GeneralLayout>
  );
};

export default GeneralLayout;
