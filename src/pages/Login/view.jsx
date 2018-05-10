import React from 'react';
import {Flex} from 'antd-mobile';
import {routerRedux} from 'dva/router';
import styles from './view.less';

class Login extends React.Component {

  componentDidMount() {
  };

  render() {

    document.title = '登录';

    const { dispatch, login } = this.props;
    const { name } = login;

    return (
      <div className={styles.name}>
        { name }
      </div>
    );
  }
}

export default Login;
