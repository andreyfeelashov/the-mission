import React from 'react';

import Viewport from '~/components/layout/viewport';
import WidgetOutlet from '~/components/layout/widget-outlet';

import {ServiceProvider} from '~/contexts/service';

import styles from './styles.css';

export default React.memo(Root);

function Root({services}) {
  return (
    <ServiceProvider value={services}>
      <div className={styles['root']}>
        <Viewport />
        <WidgetOutlet />
      </div>
    </ServiceProvider>
  );
}
