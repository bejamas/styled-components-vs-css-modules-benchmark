import React, { useEffect, useState } from 'react';
import styled, { CSSObject } from 'styled-components';

const Container = styled.div`
  padding: 20px;
  font-family: 'PP Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const ResultBox = styled.div`
  background: #befc65;
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e4e8;
  text-align: center;
`;

const ResultLabel = styled.div`
  font-size: 18px;
  color: #586069;
  margin-bottom: 8px;
`;

const ResultValue = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #000;
`;

const Measuring = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #586069;
`;

interface BoxProps {
  css?: CSSObject;
}

const Box = styled.div<BoxProps>`
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: #ccc;
  text-align: center;
  line-height: 1;
  font-size: 100px;
  ${(props) => props.css}
`;

export default function App() {
  const [renderTime, setRenderTime] = useState<number | null>(null);
  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    const startTime = performance.now();

    requestAnimationFrame(() => {
      const endTime = performance.now();
      setRenderTime(endTime - startTime);
      setIsRendering(false);
    });
  }, []);

  return (
    <Container>
      <h1>styled-components</h1>

      {isRendering ? (
        <Measuring>Measuring render time...</Measuring>
      ) : (
        <ResultBox>
          <ResultLabel>Render Time</ResultLabel>
          <ResultValue>{renderTime?.toFixed(2)}ms</ResultValue>
        </ResultBox>
      )}

      {Array(1000)
        .fill(1)
        .map((_, i) => (
          <Box css={{ margin: `${i}px` }} key={i}>
            {i}
          </Box>
        ))}
    </Container>
  );
}
