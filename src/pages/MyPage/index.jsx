import {
  connect
} from 'dva';
import React from 'react';
import MyPage from './view.jsx';

function MyPageContainer({dispatch, myPage, location}) {

  return (<MyPage
      dispatch={dispatch}
      location={location}
      myPage={myPage}
    />
  );
}

function mapStateToProps(state) {
  const {myPage} = state;
  return {myPage};
}

export default connect(mapStateToProps)(MyPageContainer);

