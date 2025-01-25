import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import styles from '../utils/Button.module.css';

const Test: React.FunctionComponent<TestComponentProps> = ({ testIndex }: TestComponentProps) => {
  const variant = testIndex % 2 === 0 ? 'red' : 'blue';
  const size = testIndex % 2 === 0 ? '1' : '2';

  return (
    <button className={`${styles.button} ${styles[`variant-${variant}`]} ${styles[`size-${size}`]}`}>testing</button>
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
