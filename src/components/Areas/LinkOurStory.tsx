import React from 'react';
import { withRouter } from 'next/router';
import { Typography } from '@material-ui/core';

interface Props {
  router: any;
}

const LinkOurStory: React.FC<Props> = props => {
  const handleClick = (e: any) => {
    e.preventDefault();
    const { router } = props;

    router.push('/our-story', '/our-story');
  };

  return (
    <Typography
      component='a'
      variant='subtitle1'
      color='secondary'
      onClick={handleClick}>
      Our Story
    </Typography>
  );
};

export default withRouter(LinkOurStory);
