import React from 'react';
import { withRouter } from 'next/router';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Styled from './styles';
import { setPrevRoute } from 'src/store/actions/prevRouteActions';

interface OwnProps {
  color: 'default' | 'primary' | 'secondary';
  text?: string;
  path: string;
  pos: 'topLeft' | 'bottomRight';
  // bgColor: string;
}

interface State {
  animate: boolean;
  animateComplete: boolean;
}

type Props = OwnProps & {
  router: any;
  prevRoute: string;
  setPrevRoute: (route: string) => void;
};

class HalfCircle extends React.Component<Props, State> {
  state = {
    animate: false,
    animateComplete: false,
  };

  handleClick = (link: string): void => {
    const { router, setPrevRoute } = this.props;

    setPrevRoute(router.route);
    router.push(link, link);
  };

  setAnimation = (link: string) => {
    const { prevRoute, router } = this.props;
    const { route } = router;

    if (route === '/' && link === '/rsvp') {
      return 'fadeGreenToWhite';
    }

    if (route === '/' && link === '/venue') {
      return 'fadeRedToWhite';
    }
  };

  render() {
    const { color, pos, text = '', path } = this.props;
    // const { animate, animateComplete } = this.state;

    // const animate = this.setAnimation(path);

    return (
      <Styled.HalfCircleWrap pos={pos}>
        <Styled.HalfCircle
          // animate={animate}
          // bgColor={bgColor}
          onClick={() => this.handleClick(path)}
          tabIndex={-1}
          pos={pos}
          variant='contained'
          color={color}
          disableElevation
          fullWidth>
          {text.split('').map((t, i) => (
            <span key={`${t}-${i}`}>{t}</span>
          ))}
        </Styled.HalfCircle>
      </Styled.HalfCircleWrap>
    );
  }
}

const mapStateToProps = state => {
  return {
    prevRoute: state.prevRoute.prevRoute,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPrevRoute: route => dispatch(setPrevRoute(route)),
  };
};

export default compose<React.ComponentType<OwnProps>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(HalfCircle);
