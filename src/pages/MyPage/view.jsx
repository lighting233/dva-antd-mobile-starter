import React from 'react';
import {Flex} from 'antd-mobile';
import {routerRedux} from 'dva/router';
import style from './view.less';
import Main from '../../components/Main/main';

class MyPage extends React.Component {

  componentDidMount() {
  };

  render() {

    document.title = '首页';

    const { dispatch, myPage, location } = this.props;
    const { name } = myPage;

    return (
      <Main location={location} dispatch={dispatch}>
        <div className={style.name}>
          { name }
        </div>
      </Main>
    );
  }
}

export default MyPage;
