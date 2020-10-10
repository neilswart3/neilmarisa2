import React from 'react';
import { withRouter } from 'next/router';
import Styled from './styles';

interface OwnProps {
  color: 'default' | 'primary' | 'secondary';
  text?: string;
  path: string;
  pos: 'topLeft' | 'bottomRight';
}

type Props = OwnProps & {
  router: any;
  prevRoute: string;
  setPrevRoute: (route: string) => void;
};

const HalfCircle: React.FC<Props> = props => {
  const handleClick = (link: string): void => {
    const { router } = props;

    router.push(link, link);
  };

  const { color, pos, text = '', path } = props;

  return (
    <Styled.HalfCircleWrap pos={pos}>
      <Styled.HalfCircle
        onClick={() => handleClick(path)}
        tabIndex={-1}
        pos={pos}
        variant='contained'
        color={color}
        disableElevation
        fullWidth>
        {text.split('').map((t: string, i: number) => (
          <span key={`${t}-${i}`}>{t}</span>
        ))}
      </Styled.HalfCircle>
    </Styled.HalfCircleWrap>
  );
};

export default withRouter(HalfCircle);
