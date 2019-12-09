import React from 'react';

import styles from './styles.css';

export default React.memo(Root);

function Root() {
  return <div className={styles['root']} />;
}
