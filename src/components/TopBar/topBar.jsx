import React, {Component} from 'react';
import styles from './topBar.less';
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
    const {title, showEdit, goBack, addClick, dispatch, children, iconRight, backShow} = this.props;

    //后退
    const normalBack = () => {
      dispatch(routerRedux.goBack());
    };

    return (
      <div>
        <div className={styles.container}>
          {
            title ?
              <div className={styles.main}>
                {title}
              </div>
              :
              children
          }
          {
            backShow ? '' :
              <div className={styles.left_img} onClick={goBack ? goBack : normalBack}>
                <img src={backIcon} alt=""/>
              </div>
          }
          {
            showEdit && <div className={styles.right_img} onClick={addClick}>
              <img src={iconRight ? iconRight : jia} alt=""/>
            </div>
          }
        </div>
      </div>
    );
  }
}
export default TopBar;
