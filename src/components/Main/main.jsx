import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/footer';

import styles from './main.less';

function Main({
  children, location, dispatch
}) {
  return (
    <div className={styles.normal}>
      <Footer location={location} childrens={children} dispatch={dispatch}/>
    </div>
  );
}

Main.propTypes = {
  location: PropTypes.object.isRequired
};

export default Main;
