import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import styles from '../utils/Button.module.css';

const Test = ({ testIndex }: TestComponentProps) => {
  // For CSS Modules, we don't actually create new styles during the test
  // as that's not how CSS Modules work - they're compiled at build time
  return (
    <button className={styles.button} style={{ '--test-index': testIndex } as any}>
      testing
    </button>
  );
};

const CSSModulesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default CSSModulesTest;
