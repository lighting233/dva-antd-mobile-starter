import React from 'react';
import PropTypes from 'prop-types';
import {
  TabBar
} from 'antd-mobile';

import {
  routerRedux
} from 'dva/router';

import styles from './footer.less';

import sy_h from '../../assets/shouye_n.png';
import zt_h from '../../assets/zhuanti_n.png';
import me_h from '../../assets/me_n.png';
import sy_s from '../../assets/shouye_h.png';
import zt_s from '../../assets/zhuanti_h.png';
import me_s from '../../assets/me_h.png';

function Footer({
  dispatch, childrens, location
}) {
  return (
    <div className={styles.normal}>
      <TabBar
        unselectedTintColor="#666666"
        tintColor="#FC6861"
        barTintColor="white"
        hidden={false}
      >
        <TabBar.Item
          title="首页"
          key="首页"
          icon={
            <div style={{
              width: '2.2rem',
              height: '2.2rem',
              background: `url(${sy_h}) center center /  2.1rem 2.1rem no-repeat` }}
            />
          }
          selectedIcon={
            <div style={{
              width: '2.2rem',
              height: '2.2rem',
              background: `url(${sy_s}) center center /  2.1rem 2.1rem no-repeat` }}
            />
          }
          selected={location.pathname === '/homePage'}
          onPress={() => dispatch(routerRedux.push('/homePage'))}
          data-seed="shouye"
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="列表"
          key="列表"
          icon={
            <div style={{
              width: '2.2rem',
              height: '2.2rem',
              background: `url(${zt_h}) center center /  2.1rem 2.1rem no-repeat` }}
            />
          }
          selectedIcon={
            <div style={{
              width: '2.2rem',
              height: '2.2rem',
              background: `url(${zt_s}) center center /  2.1rem 2.1rem no-repeat` }}
            />
          }
          selected={location.pathname === '/listPage'}
          onPress={() => dispatch(routerRedux.push('/listPage'))}
          data-seed="liebiao"
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="我的"
          key="我的"
          icon={
            <div style={{
              width: '2.2rem',
              height: '2.2rem',
              background: `url(${me_h}) center center /  2.1rem 2.1rem no-repeat` }}
            />
          }
          selectedIcon={
            <div style={{
              width: '2.2rem',
              height: '2.2rem',
              background: `url(${me_s}) center center /  2.1rem 2.1rem no-repeat` }}
            />
          }
          selected={location.pathname === '/myPage'}
          onPress={() => dispatch(routerRedux.push('/myPage'))}
          data-seed="wode"
        >
          {childrens}
        </TabBar.Item>
      </TabBar>
    </div>
  );
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};


export default Footer;
