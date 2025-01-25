import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const CSSModulesTest = dynamic(() => import('../../bench/mount-wide-tree/css-modules'), { ssr: false });

  return <CSSModulesTest />;
};

export default CreateAndMountComponent;
