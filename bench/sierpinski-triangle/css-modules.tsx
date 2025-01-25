import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import styles from './Sierpinski.module.css';

const Dot = ({ size, x, y, children }: any) => (
  <div
    className={styles.dot}
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      transform: `translate(${-size / 2}px, ${-size / 2}px)`,
      borderRadius: size / 2,
    }}
  >
    {children}
  </div>
);

const SierpinskiTriangle = ({ testIndex, s, x, y }: any) => {
  if (s <= 20) {
    return (
      <Dot
        size={20}
        x={x}
        y={y}
        style={{
          backgroundColor: `hsl(${Math.floor(Math.random() * 360)} 80% 80%)`,
        }}
      />
    );
  }
  s = s / 2;
  return (
    <>
      <SierpinskiTriangle testIndex={testIndex} s={s} x={x} y={y - s / 2} />
      <SierpinskiTriangle testIndex={testIndex} s={s} x={x - s} y={y + s / 2} />
      <SierpinskiTriangle testIndex={testIndex} s={s} x={x + s} y={y + s / 2} />
    </>
  );
};

const Test = ({ testIndex }: TestComponentProps) => {
  return (
    <div className={styles.container}>
      <SierpinskiTriangle testIndex={testIndex} x={500} y={300} s={400} />
    </div>
  );
};

const CSSModulesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default CSSModulesTest;
