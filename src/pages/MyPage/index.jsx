import {
  connect
} from 'dva';
import React from 'react';
import MyPage from './view.jsx';

function mapStateToProps(state) {
  const {myPage} = state;
  return {myPage};
}

export default connect(mapStateToProps)(MyPage);

