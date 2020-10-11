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
    <Styled.Button
      variant='contained'
      color='primary'
      onClick={handleClick}
      style={{ cursor: 'pointer' }}>
      Our Story
    </Styled.Button>
  );
};

export default withRouter(LinkOurStory);
