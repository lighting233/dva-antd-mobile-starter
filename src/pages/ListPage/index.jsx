import {
  connect
} from 'dva';
import React from 'react';
import ListPage from './view.jsx';

function ListPageContainer({dispatch, listPage, location}) {

  return (<ListPage
      dispatch={dispatch}
      location={location}
      listPage={listPage}
    />
  );
}

function mapStateToProps(state) {
  const {listPage} = state;
  return {listPage};
}

export default connect(mapStateToProps)(ListPageContainer);

