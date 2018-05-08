import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Switch, Route
} from 'dva/router';
import Dynamic from 'dva/dynamic';

function RouterConfig({
  history, app
}) {
  //登录页
  const Login = Dynamic({
    app,
    models: () => [
      import('./models/login')
    ],
    component: () => import('./pages/Login')
  });
  //首页
  const HomePage = Dynamic({
    app,
    models: () => [
      import('./models/homePage')
    ],
    component: () => import('./pages/HomePage')
  });
  //列表页
  const ListPage = Dynamic({
    app,
    models: () => [
      import('./models/listPage')
    ],
    component: () => import('./pages/ListPage')
  });
  //我的
  const MyPage = Dynamic({
    app,
    models: () => [
      import('./models/myPage')
    ],
    component: () => import('./pages/MyPage')
  });


  return (
    <Router history={history}>
      <Switch>
        {/*登录页*/}
        <Route exact path="/" component={Login} />
        {/*首页*/}
        <Route exact path="/homePage" component={HomePage} />
        {/*列表页*/}
        <Route exact path="/listPage" component={ListPage} />
        {/*我的*/}
        <Route exact path="/myPage" component={MyPage} />
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
