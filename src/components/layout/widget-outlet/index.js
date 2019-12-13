import React from 'react';

import styles from './styles.css';

export default React.memo(WidgetOutlet);

function WidgetOutlet() {
  return <div className={styles['widget-outlet']} />;
}
