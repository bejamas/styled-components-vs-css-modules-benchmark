import dynamic from 'next/dynamic';

const InitialLoadTest = () => {
  const CSSModulesTest = dynamic(() => import('../../bench/initial-load/css-modules'), { ssr: false });

  return <CSSModulesTest />;
};

export default InitialLoadTest;
