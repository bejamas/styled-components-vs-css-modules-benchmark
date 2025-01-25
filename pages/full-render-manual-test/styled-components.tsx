import React from 'react';
import styled from 'styled-components';

const Box: any = styled('div')((props: any) => ({
  display: 'inline-block',
  width: 100,
  height: 100,
  backgroundColor: '#ccc',
  textAlign: 'center',
  lineHeight: 1,
  fontSize: 100,
  ...props.css,
}));

export default function App() {
  return (
    <>
      <h1>styled-components</h1>
      {Array(10000)
        .fill(1)
        .map((_, i) => (
          <Box css={{ margin: i + 'px' }} key={i}>
            {i}
          </Box>
        ))}
    </>
  );
}
