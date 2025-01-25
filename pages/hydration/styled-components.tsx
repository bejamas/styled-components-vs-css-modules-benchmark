import dynamic from 'next/dynamic';

const HydrationTest = () => {
  const StyledComponentsTest = dynamic(() => import('../../bench/hydration/styled-components'), { ssr: false });

  return <StyledComponentsTest />;
};

export default HydrationTest;
