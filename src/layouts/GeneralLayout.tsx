import React from 'react';
import router from 'next/router';
import Background from 'src/components/common/Background';
import BackgroundForm from 'src/components/BackgroundForm';
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
    edit: false,
  };

  componentDidMount = () => {
    const { edit } = router.query;

    this.setState({
      edit: Boolean(edit),
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

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
    const { bgUrl, bgInputActive, edit } = this.state;

    return (
      <Styled.GeneralLayout>
        <Background
          unsplash={edit}
          url={edit ? bgUrl || 'x' : 'paris.jpg'}
        />
        <Styled.ContentWrap>
          {edit && (
            <BackgroundForm
              bgUrl={bgUrl}
              defaultBg={defaultBg}
              inputActive={bgInputActive}
              toggleOpen={this.toggleOpen}
              handleChange={this.handleChange}
              handleReset={this.handleReset}
            />
          )}
          <Styled.AreaGreenWrap>{areaGreen}</Styled.AreaGreenWrap>
          <Styled.Content>{children}</Styled.Content>
          <Styled.AreaRedWrap>{areaRed}</Styled.AreaRedWrap>
        </Styled.ContentWrap>
      </Styled.GeneralLayout>
    );
  }
};

export default GeneralLayout;
