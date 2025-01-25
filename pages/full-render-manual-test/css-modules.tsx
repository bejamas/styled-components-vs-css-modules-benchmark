import React from 'react';
import styles from './FullRender.module.css';

export default function App() {
  return (
    <>
      <h1>CSS Modules</h1>
      {Array(10000)
        .fill(1)
        .map((_, i) => (
          <div className={styles.box} style={{ margin: i + 'px' }} key={i}>
            {i}
          </div>
        ))}
    </>
  );
}
