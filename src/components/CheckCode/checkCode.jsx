import React from 'react';
import {
  Button
} from 'antd-mobile';
import styles from './checkCode.less';

class CheckCode extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      run: true,
      curCount: 0
    };
    this.runTimer = this.runTimer.bind(this);
  }
  componentWillReceiveProps(props) {
    const {run} = props;
    if (!run) {// 传入的run为false则停止定时器
      this.setState({
        run: false,
        curCount: 0
      });
    } else {// 传入的run为false则启动定时器
      this.setState({
        run: true
      });
    }
  }
  runTimer() {
    const me = this;
    const timer = window.setInterval(() => {
      let {run, curCount} = me.state;
      if (run && curCount) {
        this.setState({curCount: --curCount});
      } else {
        this.setState({curCount: 0});
        window.clearInterval(timer);
      }
    }, 1000)
  }
  render() {
    const {curCount} = this.state;
    const {sendCheckCode} = this.props;
    const checkCode = () => {
      this.setState({
        run: true,
        curCount: 59
      });
      this.runTimer();
      sendCheckCode();
    };
    return (
      <Button
        disabled={curCount !== 60 && curCount !== 0}
        type="ghost"
        activeClassName={styles.activeClassName_code}
        onClick={checkCode}
        className={styles.order_user_input_checkCode_send_btn}>{curCount === 60 || curCount === 0 ? '发送验证码' : curCount + 's后重新发送'}
      </Button>
    );
  }
}

export default CheckCode;
