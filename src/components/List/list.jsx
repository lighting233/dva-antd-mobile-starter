import React, {Component} from 'react';
import styles from './list.less';

//列表组建
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: null,
    };
  }

  componentWillMount() {
    var height = getClientHeight();
    this.setState({height});
    //获取窗口可视范围的高度
    function getClientHeight() {
      var clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
      }
      else {
        var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
      }
      return clientHeight;
    }
  }

  render() {
    const {list, goDetails, domain, containerHeight, ableScroll, className, saveTouch} = this.props;
    const ListShow = () => {
      return (
        list.map(item =>{
          if(item.lightPoints){
            return (
              <div key={item.touchPointId} onClick={saveTouch ? () => saveTouch(item,event) : null}>
                <div className={styles.list_container} style={{paddingTop: item.touchPointName ? '0.6rem' : '0.2rem'}}>
                  <div className={styles.title_bar} style={{display: item.touchPointName ? 'block' : 'none'}}>
                    {`归属触点: ${item.touchPointName}`}
                  </div>
                  {
                    item.lightPoints.map(item =>
                        <div className={styles.list_container_in} key={item.id} onClick={goDetails ? () => goDetails(item,event) : null}>
                          <div className={styles.list_in_left}>
                            <div className={styles.img_box}>
                              <img src={domain ? domain + item.imgPath : item.imgPath} alt=""/>
                            </div>
                          </div>
                          <div className={styles.list_in_right}>
                            <span className={styles.title}>{item.name}</span>
                            <div className={styles.comment}>{`${item.linkman} ${item.mobile}`}</div>
                            <span className={styles.type}>
                      {
                        (() => {
                          switch (item.type) {
                            case 1:
                              return "个人";
                              break;
                            case 2:
                              return "实体点";
                              break;
                            case 3:
                              return "企业";
                              break;
                            case 4:
                              return "代理人";
                              break;
                            default:
                              return null
                          }
                        })()
                      }
                    </span>
                          </div>
                        </div>
                    )
                  }
                </div>
              </div>
            )
          }
        })
      );
    };
    return (
      <div className={className}>
        {
          ableScroll ?
            <div className={styles.list_main} style={{height: containerHeight ? containerHeight : this.state.height}}>
              {ListShow()}
            </div>
            :
            <div className={styles.list_main}>
              {ListShow()}
            </div>
        }
      </div>
    );
  }
}
export default List;
