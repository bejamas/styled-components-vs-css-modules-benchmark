import React from 'react';

import { TestComponentProps, TestRunner } from '../TestRunner';
import styles from './InitialLoad.module.css';

const Test = ({ testIndex }: TestComponentProps) => {


  return (
    <div className={styles.container}>
      {Array(20)
        .fill(0)
        .map((_, sectionIndex) => (
          <section key={sectionIndex} className={styles.section}>
            <h2>Section {sectionIndex + 1}</h2>
            <div className={styles.cardGrid}>
              {Array(9)
                .fill(0)
                .map((_, cardIndex) => (
                  <div key={cardIndex} className={styles.card}>
                    <h3 className={styles.cardTitle}>Card {cardIndex + 1}</h3>
                    <div className={styles.cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                ))}
            </div>
          </section>
        ))}
    </div>
  );
};

const CSSModulesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={100} TestComponent={Test} />;
};

export default CSSModulesTest;
