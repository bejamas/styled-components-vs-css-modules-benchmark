import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Tree } from '../utils/Tree';
import styles from '../utils/Tree.module.css';

export const Test = ({ testIndex }: TestComponentProps) => {
  const Box = ({ color, layout, outer, fixed, children }: any) => (
    <div
      className={`
        ${styles.view} 
        ${styles.box}
        ${color !== undefined ? styles[`color-${color}`] : ''} 
        ${layout ? styles[`layout-${layout}`] : ''} 
        ${outer ? styles.outer : ''} 
        ${fixed ? styles.fixed : ''}
      `}
    >
      {children}
    </div>
  );

  return <Tree breadth={2} depth={7} id={0} wrap={1} box={Box} />;
};

const CSSModulesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default CSSModulesTest;
