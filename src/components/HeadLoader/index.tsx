import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import colors from 'src/app/theme/colors';
import { pageTitle, pageColor } from './helpers';

interface Props {
  router: any;
}

const HeadLoader: React.FC<Props> = props => {
  const { route } = props.router;

  return (
    <Head>
      <title>{pageTitle(route)}Neil and Marisa Wedding</title>
      <meta name='theme-color' content={colors[pageColor(route)]}></meta>
    </Head>
  );
};

export default withRouter(HeadLoader);
