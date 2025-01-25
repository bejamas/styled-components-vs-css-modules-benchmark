import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const CSSModulesTest = dynamic(() => import('../../bench/create-and-mount-button/css-modules'), { ssr: false });

  return <CSSModulesTest />;
};

export default CreateAndMountComponent;
