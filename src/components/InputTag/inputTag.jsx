import React from 'react';
import { Text, Picker, Flex } from 'antd-mobile';
import rightBraces from '../../assets/more@2x.png';
import styles from './inputTag.less';

export default class InputTag extends React.Component {
  render () {
    const {
      children,
      onChange,
      value,
      placeholder,
      className,
      type,
      onClick,
      label,
      mainStyle,
      valueShow,
      disabled,
      pickerData,
      pickerTitle,
      noBorder,
      iconimgpaths
    } = this.props;
    const leftLabel = <Text key="1" className={`${styles.order_input_label} ${className}`}>{label}</Text>;
    let rightItem;
    let showItem = [];
    let isDefault = false;
    const borderStyle = noBorder ? {} : {borderBottom: '1px solid #E6E6E6'};
    switch (type) {
      case 'text': // 输入框
        rightItem = (
          <input
            key="2"
            onChange={onChange}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            className={`${styles.order_input_text} ${className}`}
            type="text"
          />
        );
        showItem = [leftLabel, rightItem];
        break;
      case 'picker': // picker控件
        rightItem = (
          <Picker
            key="2"
            title={pickerTitle}
            extra={value || placeholder}
            cols={1}
            value={value}
            onOk={onChange}
            data={pickerData}
          >
            <Text onClick={onClick} className={`${styles.order_input_select} ${className}`}>
              {valueShow || placeholder}
              &nbsp;&nbsp;
              <img src={rightBraces} style={{ width: 5, height: 10 }} alt="" />
            </Text>
          </Picker>

        );
        showItem = [rightItem, leftLabel];
        break;
      case 'select': // 选择控件
        rightItem = (
          <Text key="2" onClick={onClick} className={`${styles.order_input_select} ${className}`}>
            {value ? value : placeholder}
            &nbsp;&nbsp;
            <img src={rightBraces} style={{width: 5, height: 10}} alt="" />
          </Text>
        );
        showItem = [leftLabel, rightItem];
        break;
      case 'img': // 图片控件
        rightItem = (
          <div key="2" className={styles.order_input_img}>
            <img src={iconimgpaths} alt=""/>
          </div>
        );
        showItem = [leftLabel, rightItem];
        break;
      default:
        rightItem = (
          <Text key="2" className={`${styles.order_input_select} ${className}`}>
            {(value !== '' && value !== undefined && value !== null) ? value : placeholder}
          </Text>
        );
        showItem = [leftLabel, rightItem];
        isDefault = true;
        break;
    }
    let showCenter = (
      <div style={mainStyle} className={styles.order_input_container}>
        {showItem}
      </div>
    );
    if (isDefault) {
      showCenter = (
        <Flex style={mainStyle} className={styles.order_input_container}>
          {showItem}
        </Flex>
      );
    }
    return (
      <div style={borderStyle} className={styles.order_input_main}>
        {showCenter}
        {children}
      </div>
    );
  }
}
