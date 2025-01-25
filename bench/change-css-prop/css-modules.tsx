import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import styles from '../utils/Button.module.css';

const Test = ({ testIndex }: TestComponentProps) => {
  return (
    <button
      className={styles.button}
      style={
        {
          '--test-index': testIndex,
          backgroundColor: `hsl(${Math.floor(Math.random() * 360)} 80% 80%)`,
        } as any
      }
    >
      testing
    </button>
  );
};

const CSSModulesTest = () => {
  return (
    <>
      <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />
      <div style={{ opacity: 0, pointerEvents: 'none' }}>
        <button className={styles.button}>
          we mount the button outside the test to make sure we're not clocking any mount time
        </button>
      </div>
    </>
  );
};

export default CSSModulesTest;
