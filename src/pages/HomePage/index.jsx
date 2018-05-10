import {
  connect
} from 'dva';
import React from 'react';
import HomePage from './view.jsx';

function mapStateToProps(state) {
  const {homePage} = state;
  return {homePage};
}

export default connect(mapStateToProps)(HomePage);

