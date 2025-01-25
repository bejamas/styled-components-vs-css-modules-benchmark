import dynamic from 'next/dynamic';

const InitialLoadTest = () => {
  const StyledComponentsTest = dynamic(() => import('../../bench/initial-load/styled-components'), { ssr: false });

  return <StyledComponentsTest />;
};

export default InitialLoadTest; 