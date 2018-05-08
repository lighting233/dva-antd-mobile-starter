import {
  connect
} from 'dva';
import React from 'react';
import HomePage from './view.jsx';

function HomePageContainer({dispatch, homePage, location}) {

  return (<HomePage
      dispatch={dispatch}
      location={location}
      homePage={homePage}
    />
  );
}

function mapStateToProps(state) {
  const {homePage} = state;
  return {homePage};
}

export default connect(mapStateToProps)(HomePageContainer);

