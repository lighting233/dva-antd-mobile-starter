import {
  connect
} from 'dva';
import React from 'react';
import ListPage from './view.jsx';

function mapStateToProps(state) {
  const {listPage} = state;
  return {listPage};
}

export default connect(mapStateToProps)(ListPage);

