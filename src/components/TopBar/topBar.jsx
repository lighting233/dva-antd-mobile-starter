import React, {Component} from 'react';
import style from './topBar.less';
import {routerRedux} from 'dva/router';
import backIcon from '../../assets/left.png'
import jia from '../../assets/jia.png'

//商品列表组建
class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, showEdit, goBack, addMan, dispatch, children} = this.props;

    //后退
    const normalBack = () => {
      dispatch(routerRedux.goBack());
    };

    return (
      <div>
        <div className={style.container}>
          {
            title ?
              <div className={style.main}>
                {title}
              </div>
              :
              children
          }
          <div className={style.left_img} onClick={goBack ? goBack : normalBack}>
            <img src={backIcon} alt=""/>
          </div>
          {
            showEdit && <div className={style.right_img} onClick={addMan}>
              <img src={jia} alt=""/>
            </div>
          }
        </div>
      </div>
    );
  }
}
export default TopBar;
