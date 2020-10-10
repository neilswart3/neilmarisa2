import React from 'react';
import { withRouter } from 'next/router';
import { compose } from 'redux';
import Background from 'src/components/common/Background';
import Plane from 'src/components/Plane';
import Styled from './styles';

interface OwnProps {
  children: React.ReactNode;
  overlay: 'primary' | 'secondary' | false;
  areaBottomRight: React.ReactNode;
  areaTopLeft: React.ReactNode;
}

type Props = OwnProps & {
  router: {
    route: string;
  };
};

type PlaneColor = 'primary' | 'secondary';

const GeneralLayout: React.FC<Props> = props => {
  const {
    children,
    areaTopLeft,
    areaBottomRight,
    overlay = false,
    router,
  } = props;

  const planeColor = (defaultColor: PlaneColor): PlaneColor => {
    const { route } = router;

    let color;
    switch (route) {
      case '/rsvp':
        color = 'primary';
        break;
      case '/venue':
      case '/our-story':
        color = 'secondary';
        break;

      default:
        color = defaultColor;
        break;
    }

    return color;
  };

  return (
    <Styled.GeneralLayout>
      <Background overlay={overlay} url='paris-min.jpg' />
      <Plane color={planeColor('primary')} pos='top' />
      <Plane color={planeColor('secondary')} pos='bottom' />
      <Styled.ContentWrap>
        <Styled.TopLeftWrap>{areaTopLeft}</Styled.TopLeftWrap>
        <Styled.Content>{children}</Styled.Content>
        <Styled.BottomRightWrap>{areaBottomRight}</Styled.BottomRightWrap>
      </Styled.ContentWrap>
    </Styled.GeneralLayout>
  );
};

export default compose<React.ComponentType<OwnProps>>(withRouter)(
  GeneralLayout,
);
