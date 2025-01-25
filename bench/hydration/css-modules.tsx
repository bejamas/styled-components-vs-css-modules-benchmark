import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import styles from './Hydration.module.css';

const Test = ({ testIndex }: TestComponentProps) => {
  const [isHydrated, setIsHydrated] = React.useState(false);
  const hydrationStart = React.useRef(performance.now());

  React.useEffect(() => {
    const hydrationEnd = performance.now();
    console.log('Hydration time:', hydrationEnd - hydrationStart.current);
    setIsHydrated(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.hydrationIndicator} ${isHydrated ? styles.hydrated : ''}`}>
        {isHydrated ? 'Hydrated' : 'Hydrating...'}
      </div>

      {Array(50)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={styles.dynamicSection}>
            <button className={styles.interactiveElement} onClick={() => console.log(i)}>
              Click me {i}
            </button>
          </div>
        ))}
    </div>
  );
};

const CSSModulesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default CSSModulesTest;
