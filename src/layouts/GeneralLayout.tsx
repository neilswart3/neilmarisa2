import React from 'react';
import { IconButton, Paper, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Background from 'src/components/common/Background';
import Styled from './styles';

interface Props {
  children: React.ReactNode;
  areaRed: React.ReactNode;
  areaGreen: React.ReactNode;
}

const defaultBg = 'J1OV-aqPXfw';

class GeneralLayout extends React.Component<Props, {}> {
  state = {
    bgUrl: defaultBg,
    bgInputActive: false,
  };

  handleChange = e => {
    const { name, value } = e.target;

    console.log(name, value);

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleReset = () => {
    this.setState({
      bgUrl: defaultBg,
    });
  };

  toggleOpen = (active: boolean) => {
    this.setState({
      bgInputActive: !active,
    });
  }

  render() {
    const { children, areaRed, areaGreen } = this.props;
    const { bgUrl, bgInputActive } = this.state;

    return (
      <Styled.GeneralLayout>
        <Background url={bgUrl || 'x'} />
        <Styled.EditBackground>
          <IconButton
            color='primary'
            aria-label='edit background'
            title='Edit Background'
            onClick={() => this.toggleOpen(bgInputActive)}>
            <EditIcon />
          </IconButton>
          {bgInputActive && (
            <>
              <TextField
                id='bgUrl'
                label='Unsplash ID'
                name='bgUrl'
                value={bgUrl}
                onChange={this.handleChange}
              />
              {bgUrl !== defaultBg && (
                <IconButton
                  onClick={this.handleReset}
                  color='secondary'
                  aria-label='Reset'
                  title='Reset'>
                  <RotateLeftIcon />
                </IconButton>
              )}
            </>
          )}
        </Styled.EditBackground>
        <Styled.ContentWrap>
          <Styled.AreaGreenWrap>{areaGreen}</Styled.AreaGreenWrap>
          <Styled.Content>{children}</Styled.Content>
          <Styled.AreaRedWrap>{areaRed}</Styled.AreaRedWrap>
        </Styled.ContentWrap>
      </Styled.GeneralLayout>
    );
  }
};

export default GeneralLayout;
