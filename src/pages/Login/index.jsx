import {
  connect
} from 'dva';
import React from 'react';
import Login from './view.jsx';

function mapStateToProps(state) {
  const {login} = state;
  return {login};
}

export default connect(mapStateToProps)(Login);

