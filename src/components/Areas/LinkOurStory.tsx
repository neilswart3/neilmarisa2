import React from 'react';
import { withRouter } from 'next/router';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { setPrevRoute } from 'src/store/actions/prevRouteActions';

interface Props {
  router: any;
  prevRoute: string;
  setPrevRoute: (route: string) => void;
}

const LinkOurStory: React.FC<Props> = props => {
  const handleClick = (e: any) => {
    e.preventDefault();
    const { router, setPrevRoute } = props;

    setPrevRoute(router.route);
    router.push('/our-story', '/our-story');
  };

  return (
    <Typography
      component='a'
      variant='subtitle1'
      color='secondary'
      style={{ fontWeight: 'bold' }}
      onClick={handleClick}>
      Our Story
    </Typography>
  );
};

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

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(LinkOurStory);
