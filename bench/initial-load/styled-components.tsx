import React from 'react';
import styled from 'styled-components';
import { TestComponentProps, TestRunner } from '../TestRunner';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 12px 0;
  color: #000;
`;

const CardContent = styled.div`
  color: #4a5568;
  line-height: 1.6;
`;

const Test = ({ testIndex }: TestComponentProps) => {

  return (
    <Container>
      {Array(20).fill(0).map((_, sectionIndex) => (
        <Section key={sectionIndex}>
          <h2>Section {sectionIndex + 1}</h2>
          <CardGrid>
            {Array(9).fill(0).map((_, cardIndex) => (
              <Card key={cardIndex}>
                <CardTitle>Card {cardIndex + 1}</CardTitle>
                <CardContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </CardContent>
              </Card>
            ))}
          </CardGrid>
        </Section>
      ))}
    </Container>
  );
};

const StyledComponentsTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={100} TestComponent={Test} />;
};

export default StyledComponentsTest;