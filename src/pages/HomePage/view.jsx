import React from 'react';
import {Flex} from 'antd-mobile';
import {routerRedux} from 'dva/router';
import style from './view.less';
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
          showEdit={true} //是否显示右侧添加按钮
          goBack={null} //自定义后退路由
          addMan={null} //新增能人
          dispatch={dispatch}
        >
          <div className={style.main} >自定义标题</div>
        </TopBar>
        <div className={style.name}>
          { name }
        </div>
      </Main>
    );
  }
}

export default HomePage;
