import React from 'react';
import { withRouter } from 'next/router';
import Styled from './styles';

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
    <Styled.LinkOurStory
      component='a'
      variant='subtitle1'
      color='secondary'
      onClick={handleClick}>
      Our Story
    </Styled.LinkOurStory>
  );
};

export default withRouter(LinkOurStory);
