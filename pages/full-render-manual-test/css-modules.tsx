import React, { useEffect, useState } from 'react';
import styles from './FullRender.module.css';

export default function App() {
  const [renderTime, setRenderTime] = useState<number | null>(null);
  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    const startTime = performance.now();

    // Use requestAnimationFrame to measure after the render is complete
    requestAnimationFrame(() => {
      const endTime = performance.now();
      setRenderTime(endTime - startTime);
      setIsRendering(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>CSS Modules</h1>

      {isRendering ? (
        <div className={styles.measuring}>Measuring render time...</div>
      ) : (
        <div className={styles.resultBox}>
          <div className={styles.resultLabel}>Render Time</div>
          <div className={styles.resultValue}>{renderTime?.toFixed(2)}ms</div>
        </div>
      )}

      <div className={styles.content}>
        {Array(1000)
          .fill(1)
          .map((_, i) => (
            <div className={styles.box} style={{ margin: i + 'px' }} key={i}>
              {i}
            </div>
          ))}
      </div>
    </div>
  );
}
