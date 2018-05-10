import React from 'react';
import {Flex} from 'antd-mobile';
import {routerRedux} from 'dva/router';
import styles from './view.less';
import Main from '../../components/Main/main';

class ListPage extends React.Component {

  componentDidMount() {
  };

  render() {

    document.title = '列表';

    const {dispatch, listPage, location} = this.props;
    const {name} = listPage;

    return (
      <Main location={location} dispatch={dispatch}>
        <div className={styles.name}>
          { name }
        </div>
      </Main>
    );
  }
}

export default ListPage;
