import React from 'react';
import {Flex} from 'antd-mobile';
import {routerRedux} from 'dva/router';
import styles from './view.less';
import Main from '../../components/Main/main';
import TopBar from '../../components/TopBar/topBar';

class HomePage extends React.Component {

  componentDidMount() {
  };

  render() {

    document.title = '首页';

    const {dispatch, homePage, location} = this.props;
    const {name} = homePage;

    return (
      <Main location={location} dispatch={dispatch}>
        <TopBar
          title={null} //标题,传入null时在children自定义中间标题功能。
          goBack={null} //自定义后退路由
          backShow={false} //是否显示后退图标,默认值为false，true隐藏。
          iconRight={null} //自定义右侧按钮图标
          showEdit={true} //是否显示右侧添加按钮
          addClick={null} //新增按钮点击事件
          dispatch={dispatch}
        >
          <div className={styles.main} >自定义标题</div>
        </TopBar>
        <div className={styles.name}>
          { name }
        </div>
      </Main>
    );
  }
}

export default HomePage;
