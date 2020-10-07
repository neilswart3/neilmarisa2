import React from 'react';
import router from 'next/router';
import { motion } from 'framer-motion';
import Styled from './styles';

interface Props {
  color: 'default' | 'primary' | 'secondary';
  text?: string;
  path: string;
  pos: 'topLeft' | 'bottomRight';
}

interface State {
  animate: boolean;
  animateComplete: boolean;
}

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }

class HalfCircle extends React.Component<Props, State> {
  state = {
    animate: false,
    animateComplete: false,
  };

  handleClick = (link: string): void => {
    router.push(link, link);
    // this.setState({
    //   animate: true,
    // });
  };

  render() {
    const { color, pos, text = '', path } = this.props;
    const { animate, animateComplete } = this.state;

    return (
      <Styled.HalfCircleWrap pos={pos}>
        <Styled.HalfCircle
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

export default HalfCircle;
