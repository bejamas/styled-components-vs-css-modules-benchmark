import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const CSSModulesTest = dynamic(() => import('../../bench/change-css-prop/css-modules'), { ssr: false });

  return <CSSModulesTest />;
};

export default CreateAndMountComponent;
