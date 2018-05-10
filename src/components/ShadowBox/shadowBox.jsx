import React from 'react';
import styles from './shadowBox.less';

export default function ShadowBox({ children, className, style, title }) {
  let boxStyle = styles.shadow_box;
  boxStyle += ` ${className || ''}`;
  let titleDom;
  if (title) {
    titleDom = <div className={styles.shadow_box_title}>{title}</div>;
  }
  return (
    <div style={style} className={boxStyle}>
      { titleDom }
      {children}
    </div>
  );
}
