import {
  connect
} from 'dva';
import React from 'react';
import Login from './view.jsx';

function LoginContainer({dispatch, login}) {

  return (<Login
      dispatch={dispatch}
      login={login}
    />
  );
}

function mapStateToProps(state) {
  const {login} = state;
  return {login};
}

export default connect(mapStateToProps)(LoginContainer);

