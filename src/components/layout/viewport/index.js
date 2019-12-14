import React from 'react';

import {useServices} from '~/contexts/service';

import styles from './styles.css';

export default React.memo(Viewport);

function Viewport() {
  const renderingTargetElementRef = React.useRef(null);

  const services = useServices();

  React.useEffect(connectRenderer, [services]);

  return (
    <div className={styles['viewport']}>
      <canvas
        className={styles['rendering-target']}
        ref={renderingTargetElementRef}
      />
    </div>
  );

  function connectRenderer() {
    services.renderer.initialize(renderingTargetElementRef.current);
  }
}
