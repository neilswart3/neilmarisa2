import React from 'react';
import ContentLayout from 'src/layouts/ContentLayout';
import StorySection from './StorySection';
import Styled from './styles';
import data from './data';

const OurStory: React.FC = () => {
  return (
    <ContentLayout title='Our Story' align='top' fullwidth>
      <Styled.PScrollbar options={{ suppressScrollX: true }}>
        <Styled.OurStory>
          {data.map((item, i) => (
            <StorySection key={i.toString()} item={item} />
          ))}
        </Styled.OurStory>
      </Styled.PScrollbar>
    </ContentLayout>
  );
};

export default OurStory;
