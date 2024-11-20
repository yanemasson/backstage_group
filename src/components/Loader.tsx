import {Text, TextVariant} from './Text.tsx';

const Loader = () => {
  return (
    <div className='flex justify-center animate-pulse'>
      <Text variant={TextVariant.H3}>Загрузка...</Text>
    </div>
  );
};

export default Loader;