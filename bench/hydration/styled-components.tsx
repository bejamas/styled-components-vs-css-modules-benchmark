import React from 'react';
import styled from 'styled-components';
import { TestComponentProps, TestRunner } from '../TestRunner';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HydrationIndicator = styled.div<{ isHydrated: boolean }>`
  background: ${props => props.isHydrated ? '#14F195' : '#befc65'};
  color: #000;
  padding: 16px 24px;
  border-radius: 9999px;
  text-align: center;
  margin-bottom: 24px;
  font-weight: 500;
  transition: all 0.3s ease;
`;

const DynamicSection = styled.div`
  margin: 12px 0;
`;

const InteractiveElement = styled.button`
  width: 100%;
  padding: 16px 24px;
  background: white;
  border: none;
  border-radius: 9999px;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-1px);
  }
`;

const Test = ({ testIndex }: TestComponentProps) => {
  const [isHydrated, setIsHydrated] = React.useState(false);
  const hydrationStart = React.useRef(performance.now());

  React.useEffect(() => {
    const hydrationEnd = performance.now();
    console.log('Hydration time:', hydrationEnd - hydrationStart.current);
    setIsHydrated(true);
  }, []);

  return (
    <Container>
      <HydrationIndicator isHydrated={isHydrated}>
        {isHydrated ? 'Hydrated' : 'Hydrating...'}
      </HydrationIndicator>
      
      {Array(50).fill(0).map((_, i) => (
        <DynamicSection key={i}>
          <InteractiveElement onClick={() => console.log(i)}>
            Click me {i}
          </InteractiveElement>
        </DynamicSection>
      ))}
    </Container>
  );
};

const StyledComponentsTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StyledComponentsTest;