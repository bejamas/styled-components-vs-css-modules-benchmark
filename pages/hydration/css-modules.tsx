import dynamic from 'next/dynamic';

const HydrationTest = () => {
  const CSSModulesTest = dynamic(() => import('../../bench/hydration/css-modules'), { ssr: false });

  return <CSSModulesTest />;
};

export default HydrationTest; 