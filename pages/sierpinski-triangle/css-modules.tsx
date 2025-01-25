import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const CSSModulesTest = dynamic(() => import('../../bench/sierpinski-triangle/css-modules'), { ssr: false });

  return <CSSModulesTest />;
};

export default CreateAndMountComponent;
